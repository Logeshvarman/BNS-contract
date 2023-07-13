/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/your alchmey key",
      chainId: 80001,
      currencySymbol: "MATIC",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
