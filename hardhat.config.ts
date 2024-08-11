import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import dotenv from 'dotenv'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  networks: {
    swisstronik: {
      url: 'https://json-rpc.testnet.swisstronik.com/', //URL of the RPC node for Swisstronik.
      accounts: [`0xc3ffae057f9df3ec2246dbedd4f401957171fdb1915ff1f871308cf5560cc286`], //Your private key starting with "0x"
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
}

export default config
