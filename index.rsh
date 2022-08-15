'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    amount: UInt,
    getRelay: Fun([], Address) //provide the identity of the Relay
    // Specify Alice's interact interface here
  });
  const B = Participant('Relay', {
    getBob: Fun([], Address) //Provide the identity of Bob
    // Specify Bob's interact interface here
  });
  init();
  // The first one to publish deploys the contract
  A.only(()=>{
    const amt= declassify(interact.amount);
    const relayAddr= declassify(interact.getRelay());
  })
  A.publish(amt, relayAddr)
   .pay(amt);
  B.set(relayAddr);
  commit();
  B.only(()=>{
    const Bob= declassify(interact.getBob());
  })
  // The second one to publish always attaches
  B.publish(Bob);
  transfer(amt).to(Bob);
  
  commit();
  // write your program here
  exit();
});
