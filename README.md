# Bera-HardhatExample
This repo should serve as an example of the config and manual gas-override required for hardhat based contract deployments on Berachain Artio. The repo also should help you verify countracts directly via hardhat (Routescan api and config has been shared). 

## Sum-up on the changes made.


## Post fork - please do the following
* npm init --y    
* npm install --save-dev hardhat
* npm install --save-dev dotenv
* create .env - and add WALLET_KEY=0x
* npx hardhat run scripts/deploy.ts --network berachain-artio


## To deploy on the live testnet

```shell
npx hardhat run scripts/deploy.ts --network berachain-artio
```

--- 
# To Verify Contracts 

```shell
npx hardhat verify --network berachain-artio <0x...>  
```

Make sure to relace the whole " <0xaddress> ". Correct example would be 

✅ npx hardhat verify --network berachain-artio 0x3229075dd6F75bD879F7af07d384A0856c30a806 
❌ npx hardhat verify --network berachain-artio <0x3229075dd6F75bD879F7af07d384A0856c30a806> (This is incorrect) 


--- 


# To deploy on a local fork

Spin up a local fork:

```shell
npx hardhat node --fork https://artio.rpc.berachain.com/
```

Run the deploy script in a new terminal:

```shell
npx hardhat run scripts/deploy.ts --network berachain-local
```
