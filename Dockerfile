# Node.js公式イメージを利用
FROM node:18

# 作業ディレクトリ
WORKDIR /app

# Hardhatなど必要パッケージをインストール
RUN npm install -g hardhat

# OpenZeppelinも入れておく
RUN npm install @openzeppelin/contracts

# ソースコードをコピー
COPY . .

# デフォルトコマンド（シェルを起動）
CMD [ "bash" ]