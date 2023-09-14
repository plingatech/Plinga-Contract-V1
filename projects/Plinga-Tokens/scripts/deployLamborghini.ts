import { ethers, network } from 'hardhat'
import fs from 'fs'
import readlineSync from 'readline-sync';

async function main() {
    const [owner] = await ethers.getSigners()
    console.log('owner : ', owner.getAddress())
    const isAddressValid = readlineSync.keyInYN('Is the owner address correct? (Y/N)');
    if (!isAddressValid) {
        console.log('Aborted deployment.');
        return;
    }
    const LamborghiniToken = await ethers.getContractFactory("LamborghiniToken");
    console.log("Deploying LamborghiniToken...");
    const lamborghiniToken = await LamborghiniToken.deploy();
    await lamborghiniToken.deployed();
    console.log("LamborghiniToken deployed to:", lamborghiniToken.address);
    const amountInEther = "5000000000.0";
    const amountInWei = ethers.utils.parseEther(amountInEther);
    await lamborghiniToken.mint(owner.address, amountInWei);
    console.log("%s LamborghiniToken minted to account %s", amountInEther, owner.address);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
