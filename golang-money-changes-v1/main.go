package main

import "fmt"

type Product struct {
	Name  string
	Price int
	Tax   int
}

func MoneyChanges(amount int, products []Product) []int {
	totalPrice := 0
	result := []int{}

	for _, product := range products {
		totalPrice += product.Price + product.Tax
	}

	kembalian := amount - totalPrice
	if amount > kembalian {
		for kembalian > 0 {

			if kembalian >= 1000 {
				result = append(result, 1000)
				kembalian -= 1000
			} else if kembalian >= 500 {
				result = append(result, 500)
				kembalian -= 500
			} else if kembalian >= 200 {
				result = append(result, 200)
				kembalian -= 200
			} else if kembalian >= 100 {
				result = append(result, 100)
				kembalian -= 100
			} else if kembalian >= 50 {
				result = append(result, 50)
				kembalian -= 50
			} else if kembalian >= 20 {
				result = append(result, 20)
				kembalian -= 20
			} else if kembalian >= 10 {
				result = append(result, 10)
				kembalian -= 10
			} else if kembalian >= 5 {
				result = append(result, 5)
				kembalian -= 5
			} else if kembalian >= 1 {
				result = append(result, 1)
				kembalian -= 1
			}
		}
	}

	fmt.Println(amount, totalPrice, kembalian)

	return result
}

func main() {
	fmt.Println(MoneyChanges(30000, []Product{
		{Name: "Baju", Price: 10000, Tax: 1000},
		{Name: "Product 2", Price: 15550, Tax: 1555},
	}))
}
