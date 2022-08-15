import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');
const getBalance= async (who)=>stdlib.formatCurrency( await stdlib.balanceOf(who), 4)

const beforeAlice=await  getBalance(accAlice)
const beforeBob= await getBalance(accBob)

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);

let accRelayProvide=null
const accRelayP= new Promise((resolve, reject)=>{
  accRelayProvide=resolve
})

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    amount: stdlib.parseCurrency(25),
    getRelay: async ()=>{
      console.log(`Alice creates a Relay account`)
      const acctRelay= await stdlib.newTestAccount(stdlib.minimumBalance)
      console.log("Alice shares it with Bob outside the network")
      accRelayProvide(acctRelay)
      return acctRelay.networkAccount
    }
    // implement Alice's interact object here
  }),
  (async ()=>{
    console.log("Bob waits for Alice to give info about the Relay account")
    const accRelay= await accRelayP
    console.log("Bob sent some fund into the Relay to use it")
    await stdlib.transfer(accBob, accRelay, stdlib.parseCurrency(10))
    console.log("Bob attaches to the contract as the Rekay")
    const ctcRelay= accRelay.contract(backend, ctcAlice.getInfo())
    console.log("Bob joins the application as the Relay")

    return backend.Relay(ctcRelay,{
      getBob: async ()=>{
        console.log("Bob acting as the Relay gives its info")
        return accBob.networkAccount
      }
    })
  }) (),
]);
const afterAlice= await getBalance(accAlice)
const afterBob= await getBalance(accBob)

console.log(`Alice's balance went from ${beforeAlice} to ${afterAlice}`)

console.log(`Bob's balance went from ${beforeBob} to ${afterBob}`)

console.log('Goodbye, Alice and Bob!');
