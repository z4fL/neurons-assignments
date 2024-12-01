package service

import (
	"a21hc3NpZ25tZW50/model"
	repo "a21hc3NpZ25tZW50/repository"
	"errors"
	"time"

	"github.com/golang-jwt/jwt"
)

type UserService interface {
	Register(user *model.User) (model.User, error)
	Login(user *model.User) (token *string, err error)
	GetUserTaskCategory() ([]model.UserTaskCategory, error)
}

type userService struct {
	userRepo repo.UserRepository
}

func NewUserService(userRepository repo.UserRepository) UserService {
	return &userService{userRepository}
}

func (s *userService) Register(user *model.User) (model.User, error) {
	dbUser, err := s.userRepo.GetUserByEmail(user.Email)
	if err != nil {
		return *user, err
	}

	if dbUser.Email != "" || dbUser.ID != 0 {
		return *user, errors.New("email already exists")
	}

	user.CreatedAt = time.Now()

	newUser, err := s.userRepo.CreateUser(*user)
	if err != nil {
		return *user, err
	}

	return newUser, nil
}

func (s *userService) Login(user *model.User) (token *string, err error) {
	userData, err := s.userRepo.GetUserByEmail(user.Email)
	if err != nil {
		return nil, errors.New("user not found")
	}

	if user.Email != userData.Email || user.Password != userData.Password {
		return nil, errors.New("wrong email or password")
	}

	claims := &model.Claims{
		UserID: userData.ID,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Minute * 5).Unix(),
		},
	}

	tokenJwt := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := tokenJwt.SignedString(model.JwtKey)
	if err != nil {
		return nil, err
	}

	return &tokenString, nil
}

func (s *userService) GetUserTaskCategory() ([]model.UserTaskCategory, error) {
	taskCategory, err := s.userRepo.GetUserTaskCategory()
	if err != nil {
		return []model.UserTaskCategory{}, err
	}

	return taskCategory, nil
}
