# --- ビルドステージ ---
FROM golang:1.24.3-alpine AS builder
RUN apk add --no-cache git

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# --- 実行ステージ ---
FROM alpine:latest
RUN apk --no-cache add ca-certificates tzdata

WORKDIR /app

COPY --from=builder /app/main .
# 開発用に.envもコピー
COPY --from=builder /app/.env .

EXPOSE 8080
ENTRYPOINT ["./main"]