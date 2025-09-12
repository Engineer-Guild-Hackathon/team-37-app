const hre = require("hardhat");

async function main() {
  // デプロイするコントラクトのFactoryを取得
  const BadgeNFT = await hre.ethers.getContractFactory("BadgeNFT");

  // デプロイ実行
  const badgeNFT = await BadgeNFT.deploy();

  // デプロイ完了まで待機
  await badgeNFT.deployed();

  console.log("BadgeNFT deployed to:", badgeNFT.address);
}

// エラーハンドリング付き実行
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
