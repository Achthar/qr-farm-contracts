/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  QuantTokenERC20,
  QuantTokenERC20Interface,
} from "../QuantTokenERC20";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
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
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DELEGATION_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegator",
        type: "address",
      },
    ],
    name: "delegates",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint_natural",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  "0x60806040523480156200001157600080fd5b506040518060400160405280600f81526020016e5175616e7420546f6b656e2045524360881b81525060405180604001604052806002815260200161145560f21b8152506200006f62000069620000b060201b60201c565b620000b4565b81516200008490600490602085019062000104565b5080516200009a90600590602084019062000104565b50506006805460ff1916601217905550620001e7565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200011290620001aa565b90600052602060002090601f01602090048101928262000136576000855562000181565b82601f106200015157805160ff191683800117855562000181565b8280016001018555821562000181579182015b828111156200018157825182559160200191906001019062000164565b506200018f92915062000193565b5090565b5b808211156200018f576000815560010162000194565b600281046001821680620001bf57607f821691505b60208210811415620001e157634e487b7160e01b600052602260045260246000fd5b50919050565b611cbe80620001f76000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c8063715018a6116100de578063a9059cbb11610097578063dd62ed3e11610071578063dd62ed3e14610341578063e7a324dc14610354578063f1127ed81461035c578063f2fde38b1461037d5761018e565b8063a9059cbb14610308578063b4b5ea571461031b578063c3cda5201461032e5761018e565b8063715018a6146102b7578063782d6fe1146102bf5780637ecebe00146102d25780638da5cb5b146102e557806395d89b41146102ed578063a457c2d7146102f55761018e565b8063313ce5671161014b578063587cde1e11610125578063587cde1e146102515780635c19a95c146102715780636fcfff451461028457806370a08231146102a45761018e565b8063313ce56714610216578063395093511461022b57806340c10f191461023e5761018e565b8063039fd87a1461019357806306fdde03146101a8578063095ea7b3146101c657806318160ddd146101e657806320606b70146101fb57806323b872dd14610203575b600080fd5b6101a66101a1366004611460565b610390565b005b6101b0610427565b6040516101bd91906115ce565b60405180910390f35b6101d96101d4366004611460565b6104b9565b6040516101bd9190611554565b6101ee6104d7565b6040516101bd919061155f565b6101ee6104dd565b6101d9610211366004611425565b610501565b61021e610593565b6040516101bd91906119fa565b6101d9610239366004611460565b61059c565b6101a661024c366004611460565b6105f0565b61026461025f3660046113d9565b610639565b6040516101bd9190611540565b6101a661027f3660046113d9565b61065a565b6102976102923660046113d9565b610667565b6040516101bd91906119d3565b6101ee6102b23660046113d9565b61067f565b6101a661069a565b6101ee6102cd366004611460565b6106e5565b6101ee6102e03660046113d9565b61090a565b61026461091c565b6101b061092b565b6101d9610303366004611460565b61093a565b6101d9610316366004611460565b6109b3565b6101ee6103293660046113d9565b6109c7565b6101a661033c366004611489565b610a3b565b6101ee61034f3660046113f3565b610c16565b6101ee610c41565b61036f61036a3660046114e7565b610c65565b6040516101bd9291906119e4565b6101a661038b3660046113d9565b610c92565b610398610d00565b6001600160a01b03166103a961091c565b6001600160a01b0316146103d85760405162461bcd60e51b81526004016103cf90611805565b60405180910390fd5b6103fe826103e4610593565b6103ef90600a611abd565b6103f99084611b8e565b610d04565b6001600160a01b03808316600090815260076020526040812054610423921683610dcc565b5050565b60606004805461043690611be9565b80601f016020809104026020016040519081016040528092919081815260200182805461046290611be9565b80156104af5780601f10610484576101008083540402835291602001916104af565b820191906000526020600020905b81548152906001019060200180831161049257829003601f168201915b5050505050905090565b60006104cd6104c6610d00565b8484610f30565b5060015b92915050565b60035490565b7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681565b600061050e848484610fe4565b6001600160a01b03841660009081526002602052604081208161052f610d00565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156105725760405162461bcd60e51b81526004016103cf906117bd565b6105868561057e610d00565b858403610f30565b60019150505b9392505050565b60065460ff1690565b60006104cd6105a9610d00565b8484600260006105b7610d00565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546105eb9190611a08565b610f30565b6105f8610d00565b6001600160a01b031661060961091c565b6001600160a01b03161461062f5760405162461bcd60e51b81526004016103cf90611805565b6103fe8282610d04565b6001600160a01b03808216600090815260076020526040902054165b919050565b610664338261110e565b50565b60096020526000908152604090205463ffffffff1681565b6001600160a01b031660009081526001602052604090205490565b6106a2610d00565b6001600160a01b03166106b361091c565b6001600160a01b0316146106d95760405162461bcd60e51b81526004016103cf90611805565b6106e3600061119d565b565b60004382106107065760405162461bcd60e51b81526004016103cf90611777565b6001600160a01b03831660009081526009602052604090205463ffffffff16806107345760009150506104d1565b6001600160a01b03841660009081526008602052604081208491610759600185611bc4565b63ffffffff908116825260208201929092526040016000205416116107c2576001600160a01b03841660009081526008602052604081209061079c600184611bc4565b63ffffffff1663ffffffff168152602001908152602001600020600101549150506104d1565b6001600160a01b038416600090815260086020908152604080832083805290915290205463ffffffff168310156107fd5760009150506104d1565b60008061080b600184611bc4565b90505b8163ffffffff168163ffffffff1611156108d357600060026108308484611bc4565b61083a9190611a48565b6108449083611bc4565b6001600160a01b038816600090815260086020908152604080832063ffffffff80861685529083529281902081518083019092528054909316808252600190930154918101919091529192508714156108a7576020015194506104d19350505050565b805163ffffffff168711156108be578193506108cc565b6108c9600183611bc4565b92505b505061080e565b506001600160a01b038516600090815260086020908152604080832063ffffffff9094168352929052206001015491505092915050565b600a6020526000908152604090205481565b6000546001600160a01b031690565b60606005805461043690611be9565b60008060026000610949610d00565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156109955760405162461bcd60e51b81526004016103cf90611949565b6109a96109a0610d00565b85858403610f30565b5060019392505050565b60006104cd6109c0610d00565b8484610fe4565b6001600160a01b03811660009081526009602052604081205463ffffffff16806109f257600061058c565b6001600160a01b038316600090815260086020526040812090610a16600184611bc4565b63ffffffff1663ffffffff168152602001908152602001600020600101549392505050565b60007f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866610a66610427565b80519060200120610a756111ed565b30604051602001610a89949392919061158c565b60405160208183030381529060405280519060200120905060007fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf888888604051602001610ada9493929190611568565b60405160208183030381529060405280519060200120905060008282604051602001610b07929190611525565b604051602081830303815290604052805190602001209050600060018288888860405160008152602001604052604051610b4494939291906115b0565b6020604051602081039080840390855afa158015610b66573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610b995760405162461bcd60e51b81526004016103cf906118c0565b6001600160a01b0381166000908152600a60205260408120805491610bbd83611c24565b919050558914610bdf5760405162461bcd60e51b81526004016103cf9061183a565b87421115610bff5760405162461bcd60e51b81526004016103cf90611732565b610c09818b61110e565b505050505b505050505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf81565b60086020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b610c9a610d00565b6001600160a01b0316610cab61091c565b6001600160a01b031614610cd15760405162461bcd60e51b81526004016103cf90611805565b6001600160a01b038116610cf75760405162461bcd60e51b81526004016103cf90611664565b6106648161119d565b3390565b6001600160a01b038216610d2a5760405162461bcd60e51b81526004016103cf9061198e565b610d3660008383610f2b565b8060036000828254610d489190611a08565b90915550506001600160a01b03821660009081526001602052604081208054839290610d75908490611a08565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610db890859061155f565b60405180910390a361042360008383610f2b565b816001600160a01b0316836001600160a01b031614158015610dee5750600081115b15610f2b576001600160a01b03831615610e91576001600160a01b03831660009081526009602052604081205463ffffffff169081610e2e576000610e71565b6001600160a01b038516600090815260086020526040812090610e52600185611bc4565b63ffffffff1663ffffffff168152602001908152602001600020600101545b90506000610e7f8483611bad565b9050610e8d868484846111f1565b5050505b6001600160a01b03821615610f2b576001600160a01b03821660009081526009602052604081205463ffffffff169081610ecc576000610f0f565b6001600160a01b038416600090815260086020526040812090610ef0600185611bc4565b63ffffffff1663ffffffff168152602001908152602001600020600101545b90506000610f1d8483611a08565b9050610c0e858484846111f1565b505050565b6001600160a01b038316610f565760405162461bcd60e51b81526004016103cf90611905565b6001600160a01b038216610f7c5760405162461bcd60e51b81526004016103cf906116aa565b6001600160a01b0380841660008181526002602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610fd790859061155f565b60405180910390a3505050565b6001600160a01b03831661100a5760405162461bcd60e51b81526004016103cf9061187b565b6001600160a01b0382166110305760405162461bcd60e51b81526004016103cf90611621565b61103b838383610f2b565b6001600160a01b038316600090815260016020526040902054818110156110745760405162461bcd60e51b81526004016103cf906116ec565b6001600160a01b038085166000908152600160205260408082208585039055918516815290812080548492906110ab908490611a08565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110f5919061155f565b60405180910390a3611108848484610f2b565b50505050565b6001600160a01b03808316600090815260076020526040812054909116906111358461067f565b6001600160a01b0385811660008181526007602052604080822080546001600160a01b031916898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611108828483610dcc565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b4690565b600061121543604051806060016040528060338152602001611c5660339139611392565b905060008463ffffffff1611801561126f57506001600160a01b038516600090815260086020526040812063ffffffff831691611253600188611bc4565b63ffffffff908116825260208201929092526040016000205416145b156112b8576001600160a01b03851660009081526008602052604081208391611299600188611bc4565b63ffffffff168152602081019190915260400160002060010155611348565b60408051808201825263ffffffff838116825260208083018681526001600160a01b038a166000908152600883528581208a851682529092529390209151825463ffffffff191691161781559051600191820155611317908590611a20565b6001600160a01b0386166000908152600960205260409020805463ffffffff191663ffffffff929092169190911790555b846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72484846040516113839291906119c5565b60405180910390a25050505050565b60008164010000000084106113ba5760405162461bcd60e51b81526004016103cf91906115ce565b509192915050565b80356001600160a01b038116811461065557600080fd5b6000602082840312156113ea578081fd5b61058c826113c2565b60008060408385031215611405578081fd5b61140e836113c2565b915061141c602084016113c2565b90509250929050565b600080600060608486031215611439578081fd5b611442846113c2565b9250611450602085016113c2565b9150604084013590509250925092565b60008060408385031215611472578182fd5b61147b836113c2565b946020939093013593505050565b60008060008060008060c087890312156114a1578182fd5b6114aa876113c2565b95506020870135945060408701359350606087013560ff811681146114cd578283fd5b9598949750929560808101359460a0909101359350915050565b600080604083850312156114f9578182fd5b611502836113c2565b9150602083013563ffffffff8116811461151a578182fd5b809150509250929050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9384526001600160a01b039290921660208401526040830152606082015260800190565b938452602084019290925260408301526001600160a01b0316606082015260800190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b818110156115fa578581018301518582016040015282016115de565b8181111561160b5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526025908201527f4547473a3a64656c656761746542795369673a207369676e61747572652065786040820152641c1a5c995960da1b606082015260800190565b60208082526026908201527f4547473a3a6765745072696f72566f7465733a206e6f742079657420646574656040820152651c9b5a5b995960d21b606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526021908201527f4547473a3a64656c656761746542795369673a20696e76616c6964206e6f6e636040820152606560f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526025908201527f4547473a3a64656c656761746542795369673a20696e76616c6964207369676e604082015264617475726560d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b918252602082015260400190565b63ffffffff91909116815260200190565b63ffffffff929092168252602082015260400190565b60ff91909116815260200190565b60008219821115611a1b57611a1b611c3f565b500190565b600063ffffffff808316818516808303821115611a3f57611a3f611c3f565b01949350505050565b600063ffffffff80841680611a6b57634e487b7160e01b83526012600452602483fd5b92169190910492915050565b80825b6001808611611a895750611ab4565b818704821115611a9b57611a9b611c3f565b80861615611aa857918102915b9490941c938002611a7a565b94509492505050565b600061058c60001960ff851684600082611ad95750600161058c565b81611ae65750600061058c565b8160018114611afc5760028114611b0657611b33565b600191505061058c565b60ff841115611b1757611b17611c3f565b6001841b915084821115611b2d57611b2d611c3f565b5061058c565b5060208310610133831016604e8410600b8410161715611b66575081810a83811115611b6157611b61611c3f565b61058c565b611b738484846001611a77565b808604821115611b8557611b85611c3f565b02949350505050565b6000816000190483118215151615611ba857611ba8611c3f565b500290565b600082821015611bbf57611bbf611c3f565b500390565b600063ffffffff83811690831681811015611be157611be1611c3f565b039392505050565b600281046001821680611bfd57607f821691505b60208210811415611c1e57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611c3857611c38611c3f565b5060010190565b634e487b7160e01b600052601160045260246000fdfe4547473a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d62657220657863656564732033322062697473a26469706673582212209a53ca306a9ff2dec7568e6b858e3169fc70f5d936d2fc03c42b1f69998bebc864736f6c63430008000033";

export class QuantTokenERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<QuantTokenERC20> {
    return super.deploy(overrides || {}) as Promise<QuantTokenERC20>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): QuantTokenERC20 {
    return super.attach(address) as QuantTokenERC20;
  }
  connect(signer: Signer): QuantTokenERC20__factory {
    return super.connect(signer) as QuantTokenERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QuantTokenERC20Interface {
    return new utils.Interface(_abi) as QuantTokenERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): QuantTokenERC20 {
    return new Contract(address, _abi, signerOrProvider) as QuantTokenERC20;
  }
}
