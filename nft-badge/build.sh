# 既存のイメージがあれば削除
if docker image inspect egh_2025_img > /dev/null 2>&1; then
    echo "既存のイメージ egh_2025_img を削除します..."
    docker rmi -f egh_2025_img
fi

# team-37-app/setup_env にある Dockerfile を使ってビルド
docker build -t egh_2025_img .
