const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
    const network = hre.network.name;
    const signers = await ethers.getSigners();
    const deployer = signers[0];

    console.log(`Using network:     ${network}`);
    console.log(`Deployer account:  ${deployer.address}`);
    // We get the contract to deploy
    const MasterChef = await ethers.getContractFactory("MasterChef");
    const args = ["0x1dbee9C0d320c0F6752E3795FdB34AB4263D1BA0", deployer.address, "10000000000000000000", "0", "1000000000000000000000"];
    const masterChef = await MasterChef.deploy(...args);
  
    console.log("MasterChef deployed to:", masterChef.address);
    console.log("verify contract using this command:");
    console.log(`npx hardhat --network bsc-testnet verify ${masterChef.address}`);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });