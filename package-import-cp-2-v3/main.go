package main

import (
	"a21hc3NpZ25tZW50/database"
	"a21hc3NpZ25tZW50/service"
	"fmt"
)

func CashierApp(db *database.Database) service.ServiceInterface {
	service := service.NewService(db)

	return service
}

// gunakan untuk debugging
func main() {
	database := database.NewDatabase()
	service := CashierApp(database)

	service.AddCart("Kaos sablon", 1)
	service.AddCart("Kaos Polos", 2)
	service.RemoveCart("Kaos Polos")

	// paymentInformation, err := service.Pay(500000)
	// if err != nil {
	// 	panic(err)
	// }

	// fmt.Println(paymentInformation)

	// err := service.AddCart("Kaos Polos abizzsss", 2)
	// if err != nil {
	// 	panic(err)
	// }
	cartItems, _ := database.GetCartItems()

	fmt.Println(cartItems)

	fmt.Println("success")
}
