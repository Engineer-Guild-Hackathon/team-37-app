#!/usr/bin/env bash
set -e

# コンテナを起動（終了時に自動削除）
docker run -it --rm \
  --name egh_2025_cont \
  -p 3000:3000 \
  egh_2025_img