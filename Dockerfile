# ベースイメージ
FROM node:20-alpine

# 作業ディレクトリ
WORKDIR /working

# frontend の package.json をコピーして依存関係をインストール
COPY frontend/package*.json ./
RUN npm install

# アプリのソースをコピー（appディレクトリ含む）
COPY frontend/ ./

# ポート公開
EXPOSE 3000

# デフォルトコマンド
#CMD ["npm", "run", "dev"]
