# コンテナを起動（終了時に自動削除）
docker run -it --rm \
  --name egh_2025_cont \
  -v $(pwd):/app \
  egh_2025_img