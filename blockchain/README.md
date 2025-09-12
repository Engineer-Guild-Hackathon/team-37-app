※締切が迫っておりますので、進捗をできる限りアップするようにします...
# 行なったこと
## STEP 1: ウォレットの準備
MetaMaskを、Firefoxの拡張版でインストールします。  
そして、Polygon Testnet（Polygon Amoy Testnet）を手動でネットワークに追加しました。
色々なブログサイトを見ると、トークンにMATICが使用されているのですが、POLに移行したそうなので、トークンはPOLに指定してます。
## STEP 2: テスト用トークンの入手
Polygon Testnetのfaucet（蛇口）からPOLを請求します。
## STEP 3: 開発環境を整える
Dockerfileの通り、Hardhatを使用することにしました。
## STEP 4: NFTコントラクトを書く　**←今ここ**
コンテナ内で以下を実行
```
# npx hardhat --init
# npm install @openzeppelin/contracts
```
BadgeNFT.solを追加して、以下を実行します。
```
npx hardhat compile
```
alchemy(https://www.alchemy.com/) に登録しておきます。  
hardhat.config.tsにamoy等を追記します。  
そしてscripts/deploy.tsを作成し、以下をインストールしておきます。  
```
# npm install --save-dev @nomicfoundation/hardhat-ethers ethers
```
さらに.envファイルを作成します。  
最後に以下のコマンドでデプロイを行います。
```
# npx hardhat run scripts/deploy.ts --network amoy
```
現状は以下のようにうまくいっていないです。
```
Compiling your Solidity contracts...

Nothing to compile

An unexpected error occurred:

/app/blockchain/scripts/deploy.ts:1
import { ethers } from "hardhat";
         ^

SyntaxError: The requested module 'hardhat' does not provide an export named 'ethers'
```
## STEP 5: メタデータ（証明情報）を用意
## STEP 6: 発行テスト



# ファイルの追加・書き換えについて
## BadgeNFT.sol
blockchain/contractsに以下のBadgeNFT.solを追加します。
```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BadgeNFT is ERC721, Ownable {
    uint256 private _nextTokenId;

    constructor() ERC721("Learning Badge", "LBADGE") Ownable(msg.sender) {}

    function mint(address to) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _mint(to, tokenId);
    }
}
```
## hardhat.config.ts
以下を追記します。
```
import type { HardhatUserConfig } from "hardhat/config";
import * as dotenv from "dotenv";
dotenv.config();
...
    amoy: {
      type: "http",
      url: configVariable("AMOY_RPC_URL"),
      accounts: [configVariable("AMOY_PRIVATE_KEY")],
    },
```
## deploy.ts
scripts配下に以下を作成します。
```
import { ethers } from "hardhat";

async function main() {
  const BadgeNFT = await ethers.getContractFactory("BadgeNFT");
  const badgeNFT = await BadgeNFT.deploy();
  await badgeNFT.waitForDeployment();
  console.log("BadgeNFT deployed to:", await badgeNFT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```
## .env
.gitignoreに含まれているので、各自MetaMaskとalchemyのアカウントを作成する必要があります。(以下のXXXXXは人によって異なります。)
```
AMOY_RPC_URL=https://polygon-amoy.g.alchemy.com/v2/XXXXX
AMOY_PRIVATE_KEY=0xXXXXX
```