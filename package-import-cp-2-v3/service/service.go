package service

import (
	"a21hc3NpZ25tZW50/database"
	"a21hc3NpZ25tZW50/entity"
	"fmt"
)

// Service is package for any logic needed in this program

type ServiceInterface interface {
	AddCart(productName string, quantity int) error
	RemoveCart(productName string) error
	ShowCart() ([]entity.CartItem, error)
	ResetCart() error
	GetAllProduct() ([]entity.Product, error)
	Pay(money int) (entity.PaymentInformation, error)
}

type Service struct {
	database database.DatabaseInterface
}

func NewService(database database.DatabaseInterface) *Service {
	return &Service{
		database: database,
	}
}

func (s *Service) AddCart(productName string, quantity int) error {
	if quantity <= 0 {
		return fmt.Errorf("invalid quantity")
	}

	var err error
	product, err := s.database.GetProductByName(productName)
	if err != nil {
		return err
	}

	cartItems, _ := s.database.GetCartItems()
	cartItems = append(cartItems, entity.CartItem{ProductName: product.Name, Price: product.Price, Quantity: quantity})

	err = s.database.SaveCartItems(cartItems)
	if err != nil {
		return err
	}

	return nil
}

func (s *Service) RemoveCart(productName string) error {
	var err error
	cartItems, err := s.database.GetCartItems()
	if err != nil {
		return err
	}

	found := false
	for i, item := range cartItems {
		if item.ProductName == productName {
			cartItems = append(cartItems[:i], cartItems[i+1:]...)
			found = true
			break
		}
	}

	if !found {
		return fmt.Errorf("product not found")
	}

	err = s.database.SaveCartItems(cartItems)
	if err != nil {
		return err
	}

	return nil
}

func (s *Service) ShowCart() ([]entity.CartItem, error) {
	carts, err := s.database.GetCartItems()
	if err != nil {
		return nil, err
	}

	return carts, nil
}

func (s *Service) ResetCart() error {
	var err error
	carts, err := s.database.GetCartItems()
	if err != nil {
		return err
	}
	if len(carts) > 0 {
		carts = make([]entity.CartItem, 0)
	}

	err = s.database.SaveCartItems(carts)
	if err != nil {
		return err
	}

	return nil
}

func (s *Service) GetAllProduct() ([]entity.Product, error) {
	products := s.database.GetProductData()

	return products, nil
}

func (s *Service) Pay(money int) (entity.PaymentInformation, error) {
	carts, err := s.database.GetCartItems()
	if err != nil {
		return entity.PaymentInformation{}, err
	}

	totalPrice := 0
	for _, value := range carts {
		totalPrice += value.Price * value.Quantity
	}

	if money < totalPrice {
		return entity.PaymentInformation{}, fmt.Errorf("money is not enough")
	}

	payment := entity.PaymentInformation{ProductList: carts, TotalPrice: totalPrice, MoneyPaid: money, Change: money - totalPrice}
	s.ResetCart()

	return payment, nil
}
