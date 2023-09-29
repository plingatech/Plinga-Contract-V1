import { ethers, network } from 'hardhat'
import fs from 'fs'

async function main() {
    const [owner] = await ethers.getSigners()
    console.log('owner : ', owner.getAddress())
    const DomainUsdToken = await ethers.getContractFactory("DomainUsdToken");
    console.log("Deploying DomainUsdToken...");
    const domainUsdToken = await DomainUsdToken.deploy()
    await domainUsdToken.deployed()
    console.log("DomainUsdToken deployed to:", domainUsdToken.address)
    const amountInEther = "10000000000"
    const amountInWei = ethers.utils.parseEther(amountInEther)
    await domainUsdToken.mint(owner.getAddress(),amountInWei)
    console.log("DomainUsdToken has been minted:", domainUsdToken.address);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
