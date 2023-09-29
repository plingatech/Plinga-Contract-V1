import { ethers, network } from 'hardhat'
import fs from 'fs'

async function main() {
    const [owner] = await ethers.getSigners()
    console.log('owner : ', owner.getAddress())
    const CashUSDToken = await ethers.getContractFactory("CashUSDToken");
    console.log("Deploying CashUSDToken...");
    const cashUSDToken = await CashUSDToken.deploy();
    await cashUSDToken.deployed();
    console.log("CashUSDToken deployed to:", cashUSDToken.address);
    const amountInEther = "10000000000";
    const amountInWei = ethers.utils.parseEther(amountInEther);
    await cashUSDToken.mint(owner.address, amountInWei);
    console.log("%s CashUSDToken minted to account %s", amountInEther, owner.address);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
