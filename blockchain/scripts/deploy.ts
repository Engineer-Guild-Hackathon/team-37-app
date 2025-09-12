import { ethers } from "hardhat";

async function main() {
  // Hardhat から signer を取得
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);

  // コントラクトファクトリを取得
  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(60); // コンストラクタ引数

  await lock.deployed();

  console.log("Contract deployed to:", lock.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
