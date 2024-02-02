import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.23',
  },
  networks: {
    // for testnet
    'base-test': {
      url: 'https://sepolia.base.org',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    'optmism-test': {
      url: 'https://optimism-goerli.publicnode.com',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    
    // for local dev environment
    'berachain-local': {
      url: 'http://localhost:8545',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 10000000000,
    },
  },
  defaultNetwork: 'hardhat',
};

export default config;