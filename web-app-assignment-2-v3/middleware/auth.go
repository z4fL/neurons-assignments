package middleware

import (
	"a21hc3NpZ25tZW50/model"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
)

func Auth() gin.HandlerFunc {
	return func(c *gin.Context) {
		cookie, err := c.Cookie("session_token")

		if err != nil {
			if c.Request.Header.Get("Content-Type") == "application/json" {
				c.JSON(http.StatusUnauthorized, model.ErrorResponse{Error: "Cookie not found"})
			} else {
				c.JSON(http.StatusSeeOther, model.ErrorResponse{Error: "redirecting"})
			}
			c.Abort()
			return
		}

		claims := &model.Claims{}
		token, err := jwt.ParseWithClaims(cookie, claims, func(token *jwt.Token) (interface{}, error) {
			return model.JwtKey, nil
		})

		if err != nil {
			if err == jwt.ErrSignatureInvalid {
				c.JSON(http.StatusUnauthorized, model.ErrorResponse{Error: "Invalid signature"})
				c.Abort()
				return
			}
			c.JSON(http.StatusBadRequest, model.ErrorResponse{Error: "token error"})
			c.Abort()
			return
		}

		if !token.Valid {
			c.JSON(http.StatusUnauthorized, model.ErrorResponse{Error: "token tidak valid"})
			c.Abort()
			return
		}

		c.Set("id", claims.UserID)
		c.Next()
	}
}
