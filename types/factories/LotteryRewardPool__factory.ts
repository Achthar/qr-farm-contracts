/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LotteryRewardPool,
  LotteryRewardPoolInterface,
} from "../LotteryRewardPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract MasterChef",
        name: "_chef",
        type: "address",
      },
      {
        internalType: "contract IBEP20",
        name: "_cake",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "Harvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "StartFarming",
    type: "event",
  },
  {
    inputs: [],
    name: "adminAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cake",
    outputs: [
      {
        internalType: "contract IBEP20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chef",
    outputs: [
      {
        internalType: "contract MasterChef",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IBEP20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lptoken",
    outputs: [
      {
        internalType: "contract IBEP20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "pendingReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "receiver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "setReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "contract IBEP20",
        name: "_lptoken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "startFarming",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610ef8380380610ef88339818101604052608081101561003357600080fd5b508051602082015160408301516060909301519192909160006100546100f1565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b039586166001600160a01b03199182161790915560058054948616948216949094179093556002805492851692841692909217909155600380549190931691161790556100f5565b3390565b610df4806101046000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063970d8e051161008c578063f2fde38b11610066578063f2fde38b14610223578063f363393b14610249578063f7260d3e14610251578063fc6f946814610259576100ea565b8063970d8e05146101cc578063dce17484146101fe578063ddc6326214610206576100ea565b8063715018a6116100c8578063715018a61461016a578063718da7ee146101725780638da5cb5b1461019857806395ccea67146101a0576100ea565b806312f7086c146100ef5780631fc8bc5d1461011e578063704b6c0214610142575b600080fd5b61010c6004803603602081101561010557600080fd5b5035610261565b60408051918252519081900360200190f35b6101266102e5565b604080516001600160a01b039092168252519081900360200190f35b6101686004803603602081101561015857600080fd5b50356001600160a01b03166102f4565b005b61016861036e565b6101686004803603602081101561018857600080fd5b50356001600160a01b0316610410565b61012661047f565b610168600480360360408110156101b657600080fd5b506001600160a01b03813516906020013561048e565b610168600480360360608110156101e257600080fd5b508035906001600160a01b036020820135169060400135610537565b61012661063c565b6101686004803603602081101561021c57600080fd5b503561064b565b6101686004803603602081101561023957600080fd5b50356001600160a01b03166107cd565b610126610831565b610126610840565b61012661084f565b60015460408051631175a1dd60e01b81526004810184905230602482015290516000926001600160a01b031691631175a1dd916044808301926020929190829003018186803b1580156102b357600080fd5b505afa1580156102c7573d6000803e3d6000fd5b505050506040513d60208110156102dd57600080fd5b505192915050565b6001546001600160a01b031681565b6102fc61085e565b6000546001600160a01b0390811691161461034c576040805162461bcd60e51b81526020600482018190526024820152600080516020610d9f833981519152604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b61037661085e565b6000546001600160a01b039081169116146103c6576040805162461bcd60e51b81526020600482018190526024820152600080516020610d9f833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6002546001600160a01b0316331461045d576040805162461bcd60e51b815260206004820152600b60248201526a61646d696e3a207775743f60a81b604482015290519081900360640190fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b61049661085e565b6000546001600160a01b039081169116146104e6576040805162461bcd60e51b81526020600482018190526024820152600080516020610d9f833981519152604482015290519081900360640190fd5b6005546104fd906001600160a01b03163383610862565b60408051828152905133917f5fafa99d0643513820be26656b45130b01e1c03062e1266bf36f88cbd3bd9695919081900360200190a25050565b6002546001600160a01b03163314610584576040805162461bcd60e51b815260206004820152600b60248201526a61646d696e3a207775743f60a81b604482015290519081900360640190fd5b60015461059e906001600160a01b038481169116836108b9565b60015460408051631c57762b60e31b8152600481018690526024810184905290516001600160a01b039092169163e2bbb1589160448082019260009290919082900301818387803b1580156105f257600080fd5b505af1158015610606573d6000803e3d6000fd5b50506040518592503391507f4ae4c06870b47ebbde6d53278986a91eb269349cdc9ee1e9d211373dd98afef190600090a3505050565b6005546001600160a01b031681565b6002546001600160a01b03163314610698576040805162461bcd60e51b815260206004820152600b60248201526a61646d696e3a207775743f60a81b604482015290519081900360640190fd5b60015460408051631c57762b60e31b81526004810184905260006024820181905291516001600160a01b039093169263e2bbb1589260448084019391929182900301818387803b1580156106eb57600080fd5b505af11580156106ff573d6000803e3d6000fd5b5050600554604080516370a0823160e01b81523060048201529051600094506001600160a01b0390921692506370a08231916024808301926020929190829003018186803b15801561075057600080fd5b505afa158015610764573d6000803e3d6000fd5b505050506040513d602081101561077a57600080fd5b505160035460055491925061079c916001600160a01b03908116911683610862565b604051829033907fc9695243a805adb74c91f28311176c65b417e842d5699893cef56d18bfa48cba90600090a35050565b6107d561085e565b6000546001600160a01b03908116911614610825576040805162461bcd60e51b81526020600482018190526024820152600080516020610d9f833981519152604482015290519081900360640190fd5b61082e816109cc565b50565b6004546001600160a01b031681565b6003546001600160a01b031681565b6002546001600160a01b031681565b3390565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526108b4908490610a6c565b505050565b80158061093f575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561091157600080fd5b505afa158015610925573d6000803e3d6000fd5b505050506040513d602081101561093b57600080fd5b5051155b61097a5760405162461bcd60e51b8152600401808060200182810382526036815260200180610d696036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526108b4908490610a6c565b6001600160a01b038116610a115760405162461bcd60e51b8152600401808060200182810382526026815260200180610d436026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6060610ac1826040518060400160405280602081526020017f5361666542455032303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610b1d9092919063ffffffff16565b8051909150156108b457808060200190516020811015610ae057600080fd5b50516108b45760405162461bcd60e51b815260040180806020018281038252602a815260200180610d19602a913960400191505060405180910390fd5b6060610b2c8484600085610b34565b949350505050565b6060610b3f85610cdf565b610b90576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310610bcf5780518252601f199092019160209182019101610bb0565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610c31576040519150601f19603f3d011682016040523d82523d6000602084013e610c36565b606091505b50915091508115610c4a579150610b2c9050565b805115610c5a5780518082602001fd5b8360405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ca4578181015183820152602001610c8c565b50505050905090810190601f168015610cd15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590610b2c57505015159291505056fe5361666542455032303a204245503230206f7065726174696f6e20646964206e6f7420737563636565644f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573735361666542455032303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a26469706673582212206b40e121a162f0e658701b6803cd679aa4f4c5fff8ab28901cf711e500513c6864736f6c634300060c0033";

export class LotteryRewardPool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _chef: string,
    _cake: string,
    _admin: string,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LotteryRewardPool> {
    return super.deploy(
      _chef,
      _cake,
      _admin,
      _receiver,
      overrides || {}
    ) as Promise<LotteryRewardPool>;
  }
  getDeployTransaction(
    _chef: string,
    _cake: string,
    _admin: string,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _chef,
      _cake,
      _admin,
      _receiver,
      overrides || {}
    );
  }
  attach(address: string): LotteryRewardPool {
    return super.attach(address) as LotteryRewardPool;
  }
  connect(signer: Signer): LotteryRewardPool__factory {
    return super.connect(signer) as LotteryRewardPool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LotteryRewardPoolInterface {
    return new utils.Interface(_abi) as LotteryRewardPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LotteryRewardPool {
    return new Contract(address, _abi, signerOrProvider) as LotteryRewardPool;
  }
}
