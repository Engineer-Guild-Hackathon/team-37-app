# Node.js公式イメージを利用
FROM node:22

# 作業ディレクトリ
WORKDIR /app/blockchain

# Hardhatなど必要パッケージをインストール
RUN npm install -g hardhat

# OpenZeppelinも入れておく
#RUN npm init -y
#RUN npm install @openzeppelin/contracts

# ソースコードをコピー
#COPY . .

# デフォルトコマンド（シェルを起動）
CMD [ "bash" ]