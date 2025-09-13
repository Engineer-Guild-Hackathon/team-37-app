const hre = require("hardhat");

async function main() {
  const BadgeNFT = await hre.ethers.getContractFactory("BadgeNFT");
  const badge = await BadgeNFT.deploy("MyBadge", "MBG");
  await badge.deployed();
  console.log("BadgeNFT deployed to:", badge.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
