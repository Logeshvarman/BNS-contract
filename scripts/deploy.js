const main = async() => {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("bonk");
    await domainContract.deployed();

    console.log("Contract deployed to:",domainContract.address);

    let txn = await domainContract.register("banana",{value: hre.ethers.utils.parseEther("0.1")});
    await txn.wait();
    console.log("Minted domain banana.bonk");

    txn = await domainContract.setRecord("banana","Am I a bonk");
    await txn.wait();
    console.log("Set record for banana.bonk");

    const address = await domainContract.getAddress("banana");
    console.log("Owner of banana.bonk:",address);

    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract Balance:",hre.ethers.utils.formatEther(balance));
}

const runMain = async() => {
    try{
        await main();
        process.exit(0);
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}

runMain();