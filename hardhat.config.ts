import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
import * as dotenv from 'dotenv';
import {accounts} from './networks';


dotenv.config();

const { PK_1 } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
      {
        version: '0.8.6',
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
    },
    localhost: {
      url: 'http://localhost:8545',
      accounts: {mnemonic: process.env.MNEMONIC}
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [`0x${process.env.PK_1}`],//{mnemonic: process.env.MNEMONIC}
    },
    kovan: {
      url: process.env.KOVAN_INFURA_URL,
      accounts: accounts('kovan'),
      live: true
    }
  },/*
  gasReporter: {
    currency: 'USD',
    gasPrice: 10,
    enabled: !!process.env.REPORT_GAS,
  },
  namedAccounts: {
    creator: 1,
    deployer:{
      1: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
    }
  },*/
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};

export default config;

