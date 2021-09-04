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
import type { BnbStaking, BnbStakingInterface } from "../BnbStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IBEP20",
        name: "_lp",
        type: "address",
      },
      {
        internalType: "contract IBEP20",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bonusEndBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_adminAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wbnb",
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
    name: "Deposit",
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
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "WBNB",
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
    name: "bonusEndBlock",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "emergencyRewardWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
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
    name: "limitAmount",
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
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "_user",
        type: "address",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IBEP20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accCakePerShare",
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
        name: "_blacklistAddress",
        type: "address",
      },
    ],
    name: "removeBlackList",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "rewardPerBlock",
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
    name: "rewardToken",
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
    inputs: [
      {
        internalType: "address",
        name: "_adminAddress",
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
        name: "_blacklistAddress",
        type: "address",
      },
    ],
    name: "setBlackList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setLimitAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startBlock",
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
    name: "totalAllocPoint",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
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
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "inBlackList",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a0604052678ac7230489e80000600655600060075534801561002157600080fd5b50604051611b93380380611b93833981810160405260e081101561004457600080fd5b508051602082015160408301516060840151608085015160a086015160c0909601519495939492939192909190600061007b610201565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b03199081166001600160a01b03988916178255600396909655600885905560099390935560028054861692871692909217909155606090811b6001600160601b031916608090815260408051918201815296861681526103e86020820181815297820194855260009282018381526004805495860181559384905291517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b949093029384018054909616929096169190911790935593517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c850155517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19d840155517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19e90920191909155600755610205565b3390565b60805160601c61195d6102366000398061017a52806107545280610c8d5280610de75280610e7c525061195d6000f3fe60806040526004361061016a5760003560e01c806372700241116100d1578063d0e30db01161008a578063f2fde38b11610064578063f2fde38b146104ce578063f40f0f5214610501578063f7c618c114610534578063fc6f946814610549576101a3565b8063d0e30db01461047e578063db2e21bc14610486578063e4997dc51461049b576101a3565b806372700241146103ab57806378abafaf146103de5780638ae39cac146103f35780638da5cb5b146104085780638dbb1e3a146104395780638dd9500214610469576101a3565b80633279beab116101235780633279beab146102e557806348cd4cb11461030f57806351eb05a614610324578063630b5ba11461034e578063704b6c0214610363578063715018a614610396576101a3565b80631526fe27146101a857806317caf6f1146102025780631959a002146102295780631aed65531461027c5780631f107a45146102915780632e1a7d4d146102bb576101a3565b366101a357336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101a157fe5b005b600080fd5b3480156101b457600080fd5b506101d2600480360360208110156101cb57600080fd5b503561055e565b604080516001600160a01b0390951685526020850193909352838301919091526060830152519081900360800190f35b34801561020e57600080fd5b5061021761059f565b60408051918252519081900360200190f35b34801561023557600080fd5b5061025c6004803603602081101561024c57600080fd5b50356001600160a01b03166105a5565b604080519384526020840192909252151582820152519081900360600190f35b34801561028857600080fd5b506102176105c9565b34801561029d57600080fd5b506101a1600480360360208110156102b457600080fd5b50356105cf565b3480156102c757600080fd5b506101a1600480360360208110156102de57600080fd5b503561062c565b3480156102f157600080fd5b506101a16004803603602081101561030857600080fd5b5035610819565b34801561031b57600080fd5b50610217610948565b34801561033057600080fd5b506101a16004803603602081101561034757600080fd5b503561094e565b34801561035a57600080fd5b506101a1610a7d565b34801561036f57600080fd5b506101a16004803603602081101561038657600080fd5b50356001600160a01b0316610aa0565b3480156103a257600080fd5b506101a1610b1a565b3480156103b757600080fd5b506101a1600480360360208110156103ce57600080fd5b50356001600160a01b0316610bbc565b3480156103ea57600080fd5b50610217610c30565b3480156103ff57600080fd5b50610217610c36565b34801561041457600080fd5b5061041d610c3c565b604080516001600160a01b039092168252519081900360200190f35b34801561044557600080fd5b506102176004803603604081101561045c57600080fd5b5080359060200135610c4b565b34801561047557600080fd5b5061041d610c8b565b6101a1610caf565b34801561049257600080fd5b506101a1610f60565b3480156104a757600080fd5b506101a1600480360360208110156104be57600080fd5b50356001600160a01b0316610ff3565b3480156104da57600080fd5b506101a1600480360360208110156104f157600080fd5b50356001600160a01b0316611064565b34801561050d57600080fd5b506102176004803603602081101561052457600080fd5b50356001600160a01b03166110c5565b34801561054057600080fd5b5061041d61121d565b34801561055557600080fd5b5061041d61122c565b6004818154811061056b57fe5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b039092169350919084565b60075481565b60056020526000908152604090208054600182015460029092015490919060ff1683565b60095481565b6105d761123b565b6000546001600160a01b03908116911614610627576040805162461bcd60e51b815260206004820181905260248201526000805160206118e5833981519152604482015290519081900360640190fd5b600655565b6000600460008154811061063c57fe5b60009182526020808320338452600590915260409092208054600490920290920192508311156106a8576040805162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b604482015290519081900360640190fd5b6106b2600061094e565b60006106ec82600101546106e664e8d4a510006106e08760030154876000015461123f90919063ffffffff16565b9061129f565b906112e1565b90506000811180156107035750600282015460ff16155b1561071f5760015461071f906001600160a01b03163383611323565b83156107bd57815461073190856112e1565b825560408051632e1a7d4d60e01b81526004810186905290516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691632e1a7d4d91602480830192600092919082900301818387803b15801561079b57600080fd5b505af11580156107af573d6000803e3d6000fd5b505050506107bd338561137a565b600383015482546107d89164e8d4a51000916106e09161123f565b600183015560408051858152905133917f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364919081900360200190a250505050565b61082161123b565b6000546001600160a01b03908116911614610871576040805162461bcd60e51b815260206004820181905260248201526000805160206118e5833981519152604482015290519081900360640190fd5b600154604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b1580156108bc57600080fd5b505afa1580156108d0573d6000803e3d6000fd5b505050506040513d60208110156108e657600080fd5b5051811061092e576040805162461bcd60e51b815260206004820152601060248201526f3737ba1032b737bab3b4103a37b5b2b760811b604482015290519081900360640190fd5b600154610945906001600160a01b03163383611323565b50565b60085481565b60006004828154811061095d57fe5b906000526020600020906004020190508060020154431161097e5750610945565b8054604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156109c857600080fd5b505afa1580156109dc573d6000803e3d6000fd5b505050506040513d60208110156109f257600080fd5b5051905080610a08575043600290910155610945565b6000610a18836002015443610c4b565b90506000610a456007546106e08660010154610a3f6003548761123f90919063ffffffff16565b9061123f565b9050610a68610a5d846106e08464e8d4a5100061123f565b60038601549061140f565b60038501555050436002909201919091555050565b60045460005b81811015610a9c57610a948161094e565b600101610a83565b5050565b610aa861123b565b6000546001600160a01b03908116911614610af8576040805162461bcd60e51b815260206004820181905260248201526000805160206118e5833981519152604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b610b2261123b565b6000546001600160a01b03908116911614610b72576040805162461bcd60e51b815260206004820181905260248201526000805160206118e5833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6002546001600160a01b03163314610c09576040805162461bcd60e51b815260206004820152600b60248201526a61646d696e3a207775743f60a81b604482015290519081900360640190fd5b6001600160a01b03166000908152600560205260409020600201805460ff19166001179055565b60065481565b60035481565b6000546001600160a01b031690565b60006009548211610c6757610c6082846112e1565b9050610c85565b6009548310610c7857506000610c85565b600954610c6090846112e1565b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006004600081548110610cbf57fe5b60009182526020808320338452600590915260409092206006548154600490930290930193509190610cf1903461140f565b1115610d35576040805162461bcd60e51b815260206004820152600e60248201526d06578636565642074686520746f760941b604482015290519081900360640190fd5b600281015460ff1615610d7f576040805162461bcd60e51b815260206004820152600d60248201526c1a5b88189b1858dac81b1a5cdd609a1b604482015290519081900360640190fd5b610d89600061094e565b805415610ddf576000610dbe82600101546106e664e8d4a510006106e08760030154876000015461123f90919063ffffffff16565b90508015610ddd57600154610ddd906001600160a01b03163383611323565b505b3415610f06577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b158015610e4057600080fd5b505af1158015610e54573d6000803e3d6000fd5b50506040805163a9059cbb60e01b815230600482015234602482015290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016945063a9059cbb9350604480830193506020928290030181600087803b158015610ec557600080fd5b505af1158015610ed9573d6000803e3d6000fd5b505050506040513d6020811015610eef57600080fd5b5051610ef757fe5b8054610f03903461140f565b81555b60038201548154610f219164e8d4a51000916106e09161123f565b600182015560408051348152905133917fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c919081900360200190a25050565b60006004600081548110610f7057fe5b600091825260208083203380855260059092526040909320805460049093029093018054909450610fae926001600160a01b03919091169190611323565b8054604080519182525133917f5fafa99d0643513820be26656b45130b01e1c03062e1266bf36f88cbd3bd9695919081900360200190a2600080825560019091015550565b6002546001600160a01b03163314611040576040805162461bcd60e51b815260206004820152600b60248201526a61646d696e3a207775743f60a81b604482015290519081900360640190fd5b6001600160a01b03166000908152600560205260409020600201805460ff19169055565b61106c61123b565b6000546001600160a01b039081169116146110bc576040805162461bcd60e51b815260206004820181905260248201526000805160206118e5833981519152604482015290519081900360640190fd5b61094581611469565b60008060046000815481106110d657fe5b600091825260208083206001600160a01b03878116855260058352604080862060049586029093016003810154815483516370a0823160e01b81523098810198909852925191985093969395939491909216926370a082319260248083019392829003018186803b15801561114a57600080fd5b505afa15801561115e573d6000803e3d6000fd5b505050506040513d602081101561117457600080fd5b505160028501549091504311801561118b57508015155b156111eb5760006111a0856002015443610c4b565b905060006111c76007546106e08860010154610a3f6003548761123f90919063ffffffff16565b90506111e66111df846106e08464e8d4a5100061123f565b859061140f565b935050505b61121383600101546106e664e8d4a510006106e086886000015461123f90919063ffffffff16565b9695505050505050565b6001546001600160a01b031681565b6002546001600160a01b031681565b3390565b60008261124e57506000610c85565b8282028284828161125b57fe5b04146112985760405162461bcd60e51b81526004018080602001828103825260218152602001806118c46021913960400191505060405180910390fd5b9392505050565b600061129883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611509565b600061129883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506115ab565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611375908490611605565b505050565b6040516000906001600160a01b038416906159d890849084818181858888f193505050503d80600081146113ca576040519150601f19603f3d011682016040523d82523d6000602084013e6113cf565b606091505b50509050806113755760405162461bcd60e51b81526004018080602001828103825260238152602001806119056023913960400191505060405180910390fd5b600082820183811015611298576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6001600160a01b0381166114ae5760405162461bcd60e51b815260040180806020018281038252602681526020018061189e6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600081836115955760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561155a578181015183820152602001611542565b50505050905090810190601f1680156115875780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816115a157fe5b0495945050505050565b600081848411156115fd5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561155a578181015183820152602001611542565b505050900390565b606061165a826040518060400160405280602081526020017f5361666542455032303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166116b69092919063ffffffff16565b8051909150156113755780806020019051602081101561167957600080fd5b50516113755760405162461bcd60e51b815260040180806020018281038252602a815260200180611874602a913960400191505060405180910390fd5b60606116c584846000856116cd565b949350505050565b60606116d88561183a565b611729576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106117685780518252601f199092019160209182019101611749565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146117ca576040519150601f19603f3d011682016040523d82523d6000602084013e6117cf565b606091505b509150915081156117e35791506116c59050565b8051156117f35780518082602001fd5b60405162461bcd60e51b815260206004820181815286516024840152865187939192839260440191908501908083836000831561155a578181015183820152602001611542565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906116c557505015159291505056fe5361666542455032303a204245503230206f7065726174696f6e20646964206e6f7420737563636565644f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725472616e7366657248656c7065723a204554485f5452414e534645525f4641494c4544a2646970667358221220ec8f09659dacc8d8efa4318d9c9c4c964e60c1f43cbe7451eee1f002a137961a64736f6c634300060c0033";

export class BnbStaking__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _lp: string,
    _rewardToken: string,
    _rewardPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    _adminAddress: string,
    _wbnb: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BnbStaking> {
    return super.deploy(
      _lp,
      _rewardToken,
      _rewardPerBlock,
      _startBlock,
      _bonusEndBlock,
      _adminAddress,
      _wbnb,
      overrides || {}
    ) as Promise<BnbStaking>;
  }
  getDeployTransaction(
    _lp: string,
    _rewardToken: string,
    _rewardPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    _adminAddress: string,
    _wbnb: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _lp,
      _rewardToken,
      _rewardPerBlock,
      _startBlock,
      _bonusEndBlock,
      _adminAddress,
      _wbnb,
      overrides || {}
    );
  }
  attach(address: string): BnbStaking {
    return super.attach(address) as BnbStaking;
  }
  connect(signer: Signer): BnbStaking__factory {
    return super.connect(signer) as BnbStaking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BnbStakingInterface {
    return new utils.Interface(_abi) as BnbStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BnbStaking {
    return new Contract(address, _abi, signerOrProvider) as BnbStaking;
  }
}
