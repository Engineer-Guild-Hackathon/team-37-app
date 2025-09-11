package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	supabase "github.com/supabase-community/supabase-go"
)

// DAOの構造体
type DAO struct {
	ID        string    `json:"id"`
	Name      string    `json:"name"`
	CreatedAt string    `json:"created_at"`
}

type CreateDAO struct {
	Name string `json:"name"`
}

func main() {
	const (
		paginationLimit = 4
	)

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	supabaseURL := os.Getenv("SUPABASE_URL")
	supabaseKey := os.Getenv("SUPABASE_ANON_KEY")

	if supabaseURL == "" || supabaseKey == "" {
		log.Fatal("SUPABASE_URL or SUPABASE_ANON_KEY is not set in .env file")
	}

	// Supabaseクライアントの初期化
	client, err := supabase.NewClient(supabaseURL, supabaseKey, &supabase.ClientOptions{})
	if err != nil {
		fmt.Println("cannot initalize client", err)
	}


	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// CORSの設定 (フロントエンドからのアクセスを許可)
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{http.MethodGet, http.MethodPost, http.MethodPut, http.MethodDelete},
	}))

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, Go Backend!\n")
	})

	// DAO一覧を取得するAPIエンドポイント
	e.GET("/daos", func(c echo.Context) error {
		limit := paginationLimit
		pageStr := c.QueryParam("page")
		if pageStr == "" {
			pageStr = "1"
		}

		page, err := strconv.Atoi(pageStr)
		if err != nil || page < 1 {
			page = 1
		}

		offset := (page - 1) * limit

		type DAOsResponse struct {
			Data []DAO `json:"data"`
			Count int `json:"count"`
			Page int `json:"page"`
		}

		var results []DAO
		// Supabaseのdaosテーブルからデータを取得
		data, count, err := client.From("daos").Select("*", "exact", false).Range(offset, offset + limit - 1, "").Execute()
		if err != nil {
			e.Logger.Errorf("GET /daos Error: %v", err) // エラーをログに出力
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
		}
		if err := json.Unmarshal(data, &results); err != nil {
			e.Logger.Errorf("GET /daos Unmarshal Error: %v", err) // エラーをログに出力
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
		}

		response := DAOsResponse{
			Data: results,
			Count: int(count),
			Page: page,
		}

		return c.JSON(http.StatusOK, response)
	})

	// DAOを新規作成するAPIエンドポイント
	e.POST("/daos", func(c echo.Context) error {
		var newDao CreateDAO
		if err := c.Bind(&newDao); err != nil { // リクエストボディ（JSON）をDAO構造体の対応するフィールドに値をセット
			return c.JSON(http.StatusBadRequest, map[string]string{"error": err.Error()})
		}

		var results []DAO
		// Supabaseのdaosテーブルにデータを挿入
		data, _, err := client.From("daos").Insert(newDao, false, "", "", "").Execute()
		if err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
		}

		if err := json.Unmarshal(data, &results); err != nil {
			e.Logger.Errorf("POST /daos Unmarshal Error: %v", err) // エラーをログに出力
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
		}

		if len(results) > 0 {
			return c.JSON(http.StatusCreated, results[0])
		}

		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to create DAO"})
	})

	// 指定したIDのDAOを削除するAPIエンドポイント
	e.DELETE("/daos/:id", func(c echo.Context) error {
		id := c.Param("id")

		// Supabaseのdaosテーブルから指定したIDのデータを削除
		data, _, err := client.From("daos").Delete("", "").Eq("id", id).Execute()
		if err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
		}

		if len(data) == 0 {
	        return c.JSON(http.StatusNotFound, map[string]string{"error": "DAO not found"})
	    }

		return c.NoContent(http.StatusNoContent)
	})

	e.Logger.Fatal(e.Start(":8080"))
}