import { ethers, network } from 'hardhat'
import fs from 'fs'

async function main() {
    const [owner] = await ethers.getSigners()
    console.log('owner', owner.address)
    const FerrariToken = await ethers.getContractFactory("FerrariToken");
    console.log("Deploying FerrariToken...");
    const ferrariToken = await FerrariToken.deploy();
    await ferrariToken.deployed();
    console.log("FerrariToken deployed to:", ferrariToken.address);
    const amountInEther = "2000000000";
    const amountInWei = ethers.utils.parseEther(amountInEther);
    await ferrariToken.mint(owner.address, amountInWei);
    console.log("%s FerrariToken minted to account %s", amountInEther, owner.address);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
