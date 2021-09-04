/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Multicall, MulticallInterface } from "../Multicall";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610552806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806372425d9d1161005b57806372425d9d146100e757806386d516e8146100ef578063a8b0574e146100f7578063ee82ac5e1461010c57610088565b80630f28c97d1461008d578063252dba42146100ab57806327e86d6e146100cc5780634d2301cc146100d4575b600080fd5b61009561011f565b6040516100a2919061043c565b60405180910390f35b6100be6100b9366004610314565b610123565b6040516100a2929190610445565b610095610246565b6100956100e23660046102f2565b61024f565b61009561025c565b610095610260565b6100ff610264565b6040516100a29190610428565b61009561011a3660046103f4565b610268565b4290565b8051439060609067ffffffffffffffff8111801561014057600080fd5b5060405190808252806020026020018201604052801561017457816020015b606081526020019060019003908161015f5790505b50905060005b8351811015610240576000606085838151811061019357fe5b6020026020010151600001516001600160a01b03168684815181106101b457fe5b6020026020010151602001516040516101cd919061040c565b6000604051808303816000865af19150503d806000811461020a576040519150601f19603f3d011682016040523d82523d6000602084013e61020f565b606091505b50915091508161021e57600080fd5b8084848151811061022b57fe5b6020908102919091010152505060010161017a565b50915091565b60001943014090565b6001600160a01b03163190565b4490565b4590565b4190565b4090565b80356001600160a01b038116811461028357600080fd5b92915050565b600082601f830112610299578081fd5b813567ffffffffffffffff8111156102af578182fd5b6102c2601f8201601f19166020016104c5565b91508082528360208285010111156102d957600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215610303578081fd5b61030d838361026c565b9392505050565b60006020808385031215610326578182fd5b823567ffffffffffffffff8082111561033d578384fd5b818501915085601f830112610350578384fd5b81358181111561035e578485fd5b61036b84858302016104c5565b81815284810190848601875b848110156103e55781358701604080601f19838f03011215610397578a8bfd5b6103a0816104c5565b6103ac8e8c850161026c565b81529082013590888211156103bf578b8cfd5b6103cd8e8c84860101610289565b818c0152865250509287019290870190600101610377565b50909998505050505050505050565b600060208284031215610405578081fd5b5035919050565b6000825161041e8184602087016104ec565b9190910192915050565b6001600160a01b0391909116815260200190565b90815260200190565b600060408201848352602060408185015281855180845260608601915060608382028701019350828701855b828110156104b757878603605f190184528151805180885261049881888a018985016104ec565b601f01601f191696909601850195509284019290840190600101610471565b509398975050505050505050565b60405181810167ffffffffffffffff811182821017156104e457600080fd5b604052919050565b60005b838110156105075781810151838201526020016104ef565b83811115610516576000848401525b5050505056fea2646970667358221220daf20a549c4cc4fcdbd00e442a448fe66f6cb10946300491cbcbae134cddfec164736f6c634300060c0033";

export class Multicall__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Multicall> {
    return super.deploy(overrides || {}) as Promise<Multicall>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Multicall {
    return super.attach(address) as Multicall;
  }
  connect(signer: Signer): Multicall__factory {
    return super.connect(signer) as Multicall__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MulticallInterface {
    return new utils.Interface(_abi) as MulticallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall {
    return new Contract(address, _abi, signerOrProvider) as Multicall;
  }
}
