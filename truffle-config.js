require("ts-node/register");
require("dotenv").config();

const fs = require("fs");

const HDWalletProvider = require("@truffle/hdwallet-provider");

function getProvider(network) {
	const url = `https://${network}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;
    return new HDWalletProvider(process.env.KEY_MNEMONIC, url);
}

module.exports = {
  plugins: ["truffle-contract-size", 'truffle-plugin-verify'],

  test_file_extension_regexp: /.*\.ts$/,

  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },

  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: () => getProvider("rinkeby"),
      network_id: 4, // Rinkeby's id
      gasPrice: 20 * 1000000000, // 20 gwei
    },
    mainnet: {
      provider: () => getProvider("mainnet"),
      network_id: 1, // Mainnet's id
      gasPrice: 60 * 1000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.7.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 100000,
        },
      },
    },
  },
};
