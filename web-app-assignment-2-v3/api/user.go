package api

import (
	"a21hc3NpZ25tZW50/model"
	"a21hc3NpZ25tZW50/service"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type UserAPI interface {
	Register(c *gin.Context)
	Login(c *gin.Context)
	GetUserTaskCategory(c *gin.Context)
}

type userAPI struct {
	userService service.UserService
}

func NewUserAPI(userService service.UserService) *userAPI {
	return &userAPI{userService}
}

func (u *userAPI) Register(c *gin.Context) {
	var user model.UserRegister

	if err := c.BindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, model.NewErrorResponse("invalid decode json"))
		return
	}

	if user.Email == "" || user.Password == "" || user.Fullname == "" {
		c.JSON(http.StatusBadRequest, model.NewErrorResponse("register data is empty"))
		return
	}

	var recordUser = model.User{
		Fullname: user.Fullname,
		Email:    user.Email,
		Password: user.Password,
	}

	recordUser, err := u.userService.Register(&recordUser)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.NewErrorResponse(err.Error()))
		return
	}

	c.JSON(http.StatusCreated, model.NewSuccessResponse("register success"))
}

func (u *userAPI) Login(c *gin.Context) {
	var userData model.UserLogin

	if err := c.BindJSON(&userData); err != nil {
		c.JSON(http.StatusBadRequest, model.NewErrorResponse("invalid decode json"))
		return
	}

	if userData.Email == "" || userData.Password == "" {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "email or password is empty",
		})
		return
	}

	var user model.User
	user.Email = userData.Email
	user.Password = userData.Password

	loggedInUser, err := u.userService.Login(&user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "error internal server",
		})
		return
	}

	expirationTime := time.Now().Add(5 * time.Minute)
	tokenString := loggedInUser

	http.SetCookie(c.Writer, &http.Cookie{
		Name:    "session_token",
		Value:   *tokenString,
		Expires: expirationTime,
	})

	c.JSON(http.StatusOK, gin.H{
		"user_id": user.ID,
		"message": "login success",
	})
}

func (u *userAPI) GetUserTaskCategory(c *gin.Context) {
	taskCategory, err := u.userService.GetUserTaskCategory()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "error internal server",
		})
		return
	}

	c.JSON(http.StatusOK, taskCategory)
}
