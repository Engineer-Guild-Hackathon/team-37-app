# Project Name
Go + Supabase バックエンドアプリ

## 必要条件
- Docker, Docker Compose
- Go 1.24.x
- 環境変数: `.env` に SUPABASE_URL, SUPABASE_ANON_KEY, PORT を設定
```env
SUPABASE_URL=<あなたのSupabase URL>
SUPABASE_ANON_KEY=<あなたのSupabase ANON KEY>
PORT=8080
```

## Dockerで起動

```
# 初回ビルドも含めて起動
docker compose up --build

# バックグラウンドで起動（-dをつける）
docker compose up -d
```

## APIテスト例（curl）

現時点で DAO チャットを作成・削除・取得できるAPIエンドポイントを実装済み

### GET リクエスト例
```
curl -X GET http://localhost:8080
```
```
Hello, Go Backend!
```
と出力。
```
curl http://localhost:8080/daos
```
```
{"data":[{"id":"d417bce3-3a98-4a20-8fce-64e3405df089","name":"テストDAO1","created_at":"2025-09-10T13:55:07.835024+00:00"},{"id":"a616fc68-4eb0-4e09-abe2-ddeaaeab49da","name":"サンプル1","created_at":"2025-09-11T10:48:30.446439+00:00"},{"id":"f42455f9-0e51-401c-953d-d0cac7fa64eb","name":"サンプル5","created_at":"2025-09-11T10:48:43.998906+00:00"}],"count":3,"page":1}
```
と出力。
```
# | jq をつけると見やすく表示される
curl http://localhost:8080/daos | jq
```
```
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   381  100   381    0     0    672      0 --:--:-- --:--:-- --:--:--   673
{
  "data": [
    {
      "id": "d417bce3-3a98-4a20-8fce-64e3405df089",
      "name": "テストDAO1",
      "created_at": "2025-09-10T13:55:07.835024+00:00"
    },
    {
      "id": "a616fc68-4eb0-4e09-abe2-ddeaaeab49da",
      "name": "サンプル1",
      "created_at": "2025-09-11T10:48:30.446439+00:00"
    },
    {
      "id": "f42455f9-0e51-401c-953d-d0cac7fa64eb",
      "name": "サンプル5",
      "created_at": "2025-09-11T10:48:43.998906+00:00"
    }
  ],
  "count": 3,
  "page": 1
}
```
と出力。

### POST リクエスト例
```
# Supabase の DB に追加
curl -X POST http://localhost:8080/daos -H "Content-Type: application/json" -d '{"name":"テストDAO"}'
```
```
{"id":"297940de-2d7b-41a1-8617-063ef9437836","name":"テストDAOtmp","created_at":"2025-09-11T12:53:48.417171+00:00"}
```
と出力（追加成功）。

### DELETE リクエスト例
```
# f42455f9-0e51-401c-953d-d0cac7fa64eb は 作成した DAO の id
curl -X DELETE http://localhost:8080/daos/f42455f9-0e51-401c-953d-d0cac7fa64eb
```