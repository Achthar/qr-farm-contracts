/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockBEP20, MockBEP20Interface } from "../MockBEP20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
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
    inputs: [],
    name: "getOwner",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
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
  "0x60806040523480156200001157600080fd5b50604051620021233803806200212383398181016040528101906200003791906200047e565b8282620000596200004d620000c460201b60201c565b620000cc60201b60201c565b81600490805190602001906200007192919062000345565b5080600590805190602001906200008a92919062000345565b506012600660006101000a81548160ff021916908360ff1602179055505050620000bb33826200019060201b60201c565b5050506200078a565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000203576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001fa9062000559565b60405180910390fd5b6200021f816003546200032d60201b62000a591790919060201c565b6003819055506200027e81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546200032d60201b62000a591790919060201c565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200032191906200057b565b60405180910390a35050565b600081836200033d919062000610565b905092915050565b8280546200035390620006ad565b90600052602060002090601f016020900481019282620003775760008555620003c3565b82601f106200039257805160ff1916838001178555620003c3565b82800160010185558215620003c3579182015b82811115620003c2578251825591602001919060010190620003a5565b5b509050620003d29190620003d6565b5090565b5b80821115620003f1576000816000905550600101620003d7565b5090565b60006200040c6200040684620005cc565b62000598565b9050828152602081018484840111156200042557600080fd5b6200043284828562000677565b509392505050565b600082601f8301126200044c57600080fd5b81516200045e848260208601620003f5565b91505092915050565b600081519050620004788162000770565b92915050565b6000806000606084860312156200049457600080fd5b600084015167ffffffffffffffff811115620004af57600080fd5b620004bd868287016200043a565b935050602084015167ffffffffffffffff811115620004db57600080fd5b620004e9868287016200043a565b9250506040620004fc8682870162000467565b9150509250925092565b600062000515601f83620005ff565b91507f42455032303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b62000553816200066d565b82525050565b60006020820190508181036000830152620005748162000506565b9050919050565b600060208201905062000592600083018462000548565b92915050565b6000604051905081810181811067ffffffffffffffff82111715620005c257620005c162000741565b5b8060405250919050565b600067ffffffffffffffff821115620005ea57620005e962000741565b5b601f19601f8301169050602081019050919050565b600082825260208201905092915050565b60006200061d826200066d565b91506200062a836200066d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620006625762000661620006e3565b5b828201905092915050565b6000819050919050565b60005b83811015620006975780820151818401526020810190506200067a565b83811115620006a7576000848401525b50505050565b60006002820490506001821680620006c657607f821691505b60208210811415620006dd57620006dc62000712565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200077b816200066d565b81146200078757600080fd5b50565b611989806200079a6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063893d20e811610097578063a457c2d711610066578063a457c2d7146102b3578063a9059cbb146102e3578063dd62ed3e14610313578063f2fde38b1461034357610100565b8063893d20e8146102295780638da5cb5b1461024757806395d89b4114610265578063a0712d681461028357610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf57806370a08231146101ef578063715018a61461021f57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d61035f565b60405161011a91906115df565b60405180910390f35b61013d60048036038101906101389190611251565b6103f1565b60405161014a91906115c4565b60405180910390f35b61015b61040f565b60405161016891906116e1565b60405180910390f35b61018b60048036038101906101869190611202565b610419565b60405161019891906115c4565b60405180910390f35b6101a96104f2565b6040516101b691906116fc565b60405180910390f35b6101d960048036038101906101d49190611251565b610509565b6040516101e691906115c4565b60405180910390f35b6102096004803603810190610204919061119d565b6105bc565b60405161021691906116e1565b60405180910390f35b610227610605565b005b61023161068d565b60405161023e91906115a9565b60405180910390f35b61024f61069c565b60405161025c91906115a9565b60405180910390f35b61026d6106c5565b60405161027a91906115df565b60405180910390f35b61029d6004803603810190610298919061128d565b610757565b6040516102aa91906115c4565b60405180910390f35b6102cd60048036038101906102c89190611251565b6107ef565b6040516102da91906115c4565b60405180910390f35b6102fd60048036038101906102f89190611251565b6108bc565b60405161030a91906115c4565b60405180910390f35b61032d600480360381019061032891906111c6565b6108da565b60405161033a91906116e1565b60405180910390f35b61035d6004803603810190610358919061119d565b610961565b005b60606004805461036e90611811565b80601f016020809104026020016040519081016040528092919081815260200182805461039a90611811565b80156103e75780601f106103bc576101008083540402835291602001916103e7565b820191906000526020600020905b8154815290600101906020018083116103ca57829003601f168201915b5050505050905090565b60006104056103fe610a6f565b8484610a77565b6001905092915050565b6000600354905090565b6000610426848484610c42565b6104e784610432610a6f565b6104e2856040518060600160405280602881526020016118e160289139600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610498610a6f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ed09092919063ffffffff16565b610a77565b600190509392505050565b6000600660009054906101000a900460ff16905090565b60006105b2610516610a6f565b846105ad8560026000610527610a6f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610a5990919063ffffffff16565b610a77565b6001905092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61060d610a6f565b73ffffffffffffffffffffffffffffffffffffffff1661062b61069c565b73ffffffffffffffffffffffffffffffffffffffff1614610681576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067890611681565b60405180910390fd5b61068b6000610f25565b565b600061069761069c565b905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600580546106d490611811565b80601f016020809104026020016040519081016040528092919081815260200182805461070090611811565b801561074d5780601f106107225761010080835404028352916020019161074d565b820191906000526020600020905b81548152906001019060200180831161073057829003601f168201915b5050505050905090565b6000610761610a6f565b73ffffffffffffffffffffffffffffffffffffffff1661077f61069c565b73ffffffffffffffffffffffffffffffffffffffff16146107d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cc90611681565b60405180910390fd5b6107e66107e0610a6f565b83610fe9565b60019050919050565b60006108b26107fc610a6f565b846108ad8560405180606001604052806025815260200161192f6025913960026000610826610a6f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ed09092919063ffffffff16565b610a77565b6001905092915050565b60006108d06108c9610a6f565b8484610c42565b6001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610969610a6f565b73ffffffffffffffffffffffffffffffffffffffff1661098761069c565b73ffffffffffffffffffffffffffffffffffffffff16146109dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d490611681565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4490611641565b60405180910390fd5b610a5681610f25565b50565b60008183610a679190611733565b905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ae7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ade90611621565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4e906116c1565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c3591906116e1565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ca990611601565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d19906116a1565b60405180910390fd5b610d8e8160405180606001604052806026815260200161190960269139600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ed09092919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e2381600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610a5990919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ec391906116e1565b60405180910390a3505050565b6000838311158290610f18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0f91906115df565b60405180910390fd5b5082840390509392505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611059576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105090611661565b60405180910390fd5b61106e81600354610a5990919063ffffffff16565b6003819055506110c681600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610a5990919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161116791906116e1565b60405180910390a35050565b600081359050611182816118b2565b92915050565b600081359050611197816118c9565b92915050565b6000602082840312156111af57600080fd5b60006111bd84828501611173565b91505092915050565b600080604083850312156111d957600080fd5b60006111e785828601611173565b92505060206111f885828601611173565b9150509250929050565b60008060006060848603121561121757600080fd5b600061122586828701611173565b935050602061123686828701611173565b925050604061124786828701611188565b9150509250925092565b6000806040838503121561126457600080fd5b600061127285828601611173565b925050602061128385828601611188565b9150509250929050565b60006020828403121561129f57600080fd5b60006112ad84828501611188565b91505092915050565b6112bf81611789565b82525050565b6112ce8161179b565b82525050565b60006112df82611717565b6112e98185611722565b93506112f98185602086016117de565b611302816118a1565b840191505092915050565b600061131a602583611722565b91507f42455032303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611380602483611722565b91507f42455032303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006113e6602683611722565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061144c601f83611722565b91507f42455032303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b600061148c602083611722565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006114cc602383611722565b91507f42455032303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611532602283611722565b91507f42455032303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b611594816117c7565b82525050565b6115a3816117d1565b82525050565b60006020820190506115be60008301846112b6565b92915050565b60006020820190506115d960008301846112c5565b92915050565b600060208201905081810360008301526115f981846112d4565b905092915050565b6000602082019050818103600083015261161a8161130d565b9050919050565b6000602082019050818103600083015261163a81611373565b9050919050565b6000602082019050818103600083015261165a816113d9565b9050919050565b6000602082019050818103600083015261167a8161143f565b9050919050565b6000602082019050818103600083015261169a8161147f565b9050919050565b600060208201905081810360008301526116ba816114bf565b9050919050565b600060208201905081810360008301526116da81611525565b9050919050565b60006020820190506116f6600083018461158b565b92915050565b6000602082019050611711600083018461159a565b92915050565b600081519050919050565b600082825260208201905092915050565b600061173e826117c7565b9150611749836117c7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561177e5761177d611843565b5b828201905092915050565b6000611794826117a7565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156117fc5780820151818401526020810190506117e1565b8381111561180b576000848401525b50505050565b6000600282049050600182168061182957607f821691505b6020821081141561183d5761183c611872565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b6118bb81611789565b81146118c657600080fd5b50565b6118d2816117c7565b81146118dd57600080fd5b5056fe42455032303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636542455032303a207472616e7366657220616d6f756e7420657863656564732062616c616e636542455032303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220fb2d64cce64c1ff2256f75897fdf2ce342b56ee3e7713241c59bca5fb9736cf964736f6c63430008000033";

export class MockBEP20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockBEP20> {
    return super.deploy(name, symbol, supply, overrides || {}) as Promise<
      MockBEP20
    >;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, supply, overrides || {});
  }
  attach(address: string): MockBEP20 {
    return super.attach(address) as MockBEP20;
  }
  connect(signer: Signer): MockBEP20__factory {
    return super.connect(signer) as MockBEP20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockBEP20Interface {
    return new utils.Interface(_abi) as MockBEP20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockBEP20 {
    return new Contract(address, _abi, signerOrProvider) as MockBEP20;
  }
}
