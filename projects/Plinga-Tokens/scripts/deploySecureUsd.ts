import { ethers, network } from 'hardhat'
import fs from 'fs'

async function main() {
    const [owner] = await ethers.getSigners()
    console.log('owner : ', owner.getAddress())
    const SecureUSDToken = await ethers.getContractFactory("SecureUSDToken");
    console.log("Deploying SecureUSDToken...");
    const secureUSDToken = await SecureUSDToken.deploy();
    await secureUSDToken.deployed();
    console.log("secureUSDToken deployed to:", secureUSDToken.address);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
