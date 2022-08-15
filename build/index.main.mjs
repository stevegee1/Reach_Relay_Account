// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const v57 = stdlib.protect(ctc0, interact.amount, 'for Alice\'s interact field amount');
  
  const v60 = stdlib.protect(ctc1, await interact.getRelay(), {
    at: './index.rsh:17:50:application',
    fs: ['at ./index.rsh:15:9:application call to [unknown function] (defined at: ./index.rsh:15:12:function exp)'],
    msg: 'getRelay',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v57, v60],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:19:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [v57, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v62, v63], secs: v65, time: v64, didSend: v31, from: v61 } = txn1;
      
      sim_r.txns.push({
        amt: v62,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v68 = v63;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v62, v63], secs: v65, time: v64, didSend: v31, from: v61 } = txn1;
  ;
  const v68 = v63;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v73], secs: v75, time: v74, didSend: v42, from: v72 } = txn2;
  ;
  const v76 = stdlib.addressEq(v68, v72);
  stdlib.assert(v76, {
    at: './index.rsh:27:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  ;
  return;
  
  
  
  
  };
export async function Relay(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Relay expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Relay expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v62, v63], secs: v65, time: v64, didSend: v31, from: v61 } = txn1;
  ;
  const v68 = ctc.iam(v63);
  const v71 = stdlib.protect(ctc1, await interact.getBob(), {
    at: './index.rsh:24:42:application',
    fs: ['at ./index.rsh:23:9:application call to [unknown function] (defined at: ./index.rsh:23:12:function exp)'],
    msg: 'getBob',
    who: 'Relay'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v62, v68, v71],
    evt_cnt: 1,
    funcNum: 1,
    lct: v64,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:27:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v73], secs: v75, time: v74, didSend: v42, from: v72 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v73,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v73], secs: v75, time: v74, didSend: v42, from: v72 } = txn2;
  ;
  const v76 = stdlib.addressEq(v68, v72);
  stdlib.assert(v76, {
    at: './index.rsh:27:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Relay'
    });
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAgABACI1ADEYQQEWKGRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAARCMSRCM0ARJENARJIhJMNAISEUQpZDUDSTUFNf+ABGG8QT00/1CwNANXCCAxABJEsSKyATQDIluyCCOyEDT/sgezQgBUSIGgjQaIALoiNAESRDQESSISTDQCEhFESTUFSSJbNf9XCCA1/oAE6ZLS0jT/FlA0/lCwNP+IAIo0/jX9NP8WNP1QKUsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v63",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v63",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v73",
                "type": "address"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v73",
                "type": "address"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161081b38038061081b833981016040819052610022916101fc565b60008080554360035560408051602081018252918252517f7f05ef72ba4be4573fbbe84ae43ad7123b9e105ada7dc62406560e3322fcdac990610068903390859061026f565b60405180910390a16020820151516100839034146007610104565b602082810180518201516001600160a01b03908116845260408051808201825260008082528186018181529451518083528751851686526001918290554390915582519586015292519091169083015290606001604051602081830303815290604052600290805190602001906100fb92919061012d565b505050506102f1565b816101295760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054610139906102b6565b90600052602060002090601f01602090048101928261015b57600085556101a1565b82601f1061017457805160ff19168380011785556101a1565b828001600101855582156101a1579182015b828111156101a1578251825591602001919060010190610186565b506101ad9291506101b1565b5090565b5b808211156101ad57600081556001016101b2565b604080519081016001600160401b03811182821017156101f657634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561020f57600080fd5b6102176101c6565b835181526040601f198301121561022d57600080fd5b6102356101c6565b6020850151815260408501519092506001600160a01b038116811461025957600080fd5b6020838101919091528101919091529392505050565b6001600160a01b0383168152815160208083019190915282015160808201906102ae6040840182805182526020908101516001600160a01b0316910152565b509392505050565b600181811c908216806102ca57607f821691505b602082108114156102eb57634e487b7160e01b600052602260045260246000fd5b50919050565b61051b806103006000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780632b58c77d1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b366004610363565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa61024b565b60405161006492919061037b565b6100c8600160005414600a6102e8565b6100e2813515806100db57506001548235145b600b6102e8565b6000808055600280546100f4906103d8565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103d8565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610422565b90507f2acda5aa38b4208a2a7687009c06bad50691a5b0d6c1cd519fe35d44984428b633836040516101b8929190610486565b60405180910390a16101cc341560086102e8565b60208101516101e7906001600160a01b0316331460096102e8565b6101f760408301602084016104c1565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f19350505050158015610230573d6000803e3d6000fd5b50600080805560018190556102479060029061030d565b5050565b600060606000546002808054610260906103d8565b80601f016020809104026020016040519081016040528092919081815260200182805461028c906103d8565b80156102d95780601f106102ae576101008083540402835291602001916102d9565b820191906000526020600020905b8154815290600101906020018083116102bc57829003601f168201915b50505050509050915091509091565b816102475760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610319906103d8565b6000825580601f10610329575050565b601f016020900490600052602060002090810190610347919061034a565b50565b5b8082111561035f576000815560010161034b565b5090565b60006040828403121561037557600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103af57858101830151858201606001528201610393565b818111156103c1576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103ec57607f821691505b6020821081141561037557634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461034757600080fd5b60006040828403121561043457600080fd5b6040516040810181811067ffffffffffffffff8211171561046557634e487b7160e01b600052604160045260246000fd5b60405282518152602083015161047a8161040d565b60208201529392505050565b6001600160a01b03838116825282356020808401919091526060830191908401356104b08161040d565b818116604085015250509392505050565b6000602082840312156104d357600080fd5b81356104de8161040d565b939250505056fea2646970667358221220cb3cb6a47b0192cb187e484dc1c392c5ee58dfd3a6c4191c971f88a71430a8c264736f6c634300080c0033`,
  BytecodeLen: 2075,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:22:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:30:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Relay": Relay
  };
export const _APIs = {
  };
