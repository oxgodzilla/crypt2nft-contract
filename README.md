## Setup
* Install [yarn](https://classic.yarnpkg.com/en/docs/install/)
* Use `yarn install` to install dependencies.
* Copy `.env.sample` to `.env` end put your keys there.
* Modify `migrations/2_deploy_drtr.js` line 4-5 to point to your metadata files

## To deploy on Rinkeby testnet:
* Make sure you wallet (the first one generated from your mnemonics) has enough Rinkeby ETH
* Use `yarn deploy-rinkeby` to deploy
* Use `yarn verify-rinkeby` to verify on Etherscan

## To deploy on mainnet:
* Configure gas price in `truffle-config.json` (see gasPrice value in mainnet section at line 36).
  Check actual gas price at [ETH Gas Station](https://ethgasstation.info/), use the highest value.
* Make sure you wallet (the first one generated from your mnemonics) has enough ETH
* Use `yarn deploy-mainnet` to deploy
* Use `yarn verify-mainnet` to verify on Etherscan
* Transfer ownership from deploy wallet to your real one (use hardware wallet like Ledger or Trezor)


