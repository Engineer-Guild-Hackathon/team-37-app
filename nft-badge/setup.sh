# 1. package.json が無ければ作成
if [ ! -f package.json ]; then
  echo "package.json が無いので作成します..."
  npm init -y
else
  echo "package.json は既に存在します"
fi

# 2. Hardhat と必要ライブラリをインストール
echo "Hardhat 2.13.0 と関連ライブラリをインストールします..."
npm install --save-dev hardhat@2.13.0 @nomiclabs/hardhat-ethers ethers dotenv @openzeppelin/contracts

# 3. Hardhat プロジェクトを初期化（既にある場合はスキップ）
if [ ! -d contracts ]; then
  echo "Hardhat プロジェクトを初期化します..."
  npx hardhat init
else
  echo "Hardhat プロジェクトは既に存在します"
fi

echo "セットアップ完了！ 🎉"