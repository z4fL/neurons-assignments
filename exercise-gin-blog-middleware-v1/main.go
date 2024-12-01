package main

import (
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

type Post struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

var Posts = []Post{
	{ID: 1, Title: "Judul Postingan Pertama", Content: "Ini adalah postingan pertama di blog ini.", CreatedAt: time.Now(), UpdatedAt: time.Now()},
	{ID: 2, Title: "Judul Postingan Kedua", Content: "Ini adalah postingan kedua di blog ini.", CreatedAt: time.Now(), UpdatedAt: time.Now()},
}

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

var users = []User{
	{Username: "user1", Password: "pass1"},
	{Username: "user2", Password: "pass2"},
}

func authMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		username, password, hasAuth := c.Request.BasicAuth()
		if hasAuth {
			for _, user := range users {
				if user.Username == username && user.Password == password {
					c.Next()
					return
				}
			}
		}
		c.AbortWithStatusJSON(401, gin.H{"error": "Unauthorized"})
	}
}

func SetupRouter() *gin.Engine {
	r := gin.Default()

	//Set up authentication middleware here
	r.Use(authMiddleware())

	r.GET("/posts", func(c *gin.Context) {
		idParam := c.Query("id")
		if idParam == "" {
			c.JSON(http.StatusOK, gin.H{
				"posts": Posts,
			})
			return
		}

		id, err := strconv.Atoi(idParam)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "ID harus berupa angka",
			})
			return
		}

		for _, v := range Posts {
			if v.ID == id {
				c.JSON(http.StatusOK, gin.H{
					"post": v,
				})
				return
			}
		}

		c.JSON(http.StatusNotFound, gin.H{
			"error": "Postingan tidak ditemukan",
		})

	})

	r.POST("/posts", func(c *gin.Context) {
		var post Post

		err := c.ShouldBindJSON(&post)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
			return
		}

		post.ID = len(Posts) + 1
		post.CreatedAt = time.Now()
		post.UpdatedAt = time.Now()

		Posts = append(Posts, post)
		c.JSON(http.StatusCreated, gin.H{
			"message": "Postingan berhasil ditambahkan",
			"post":    post,
		})
	})

	return r
}

func main() {
	r := SetupRouter()

	r.Run(":8080")
}
