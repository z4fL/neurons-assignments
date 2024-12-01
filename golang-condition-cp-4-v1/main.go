package main

import "fmt"

func GetTicketPrice(VIP, regular, student, day int) float32 {
	subtotal := (VIP * 30) + (regular * 20) + (student * 10)
	totalTicket := VIP + regular + student

	var totalPrice float32 = float32(subtotal)
	var discount float32

	if subtotal >= 100 {
		if day%2 == 1 && totalTicket >= 5 {
			discount = float32(subtotal) * 0.25
		} else if day%2 == 1 && totalTicket < 5 {
			discount = float32(subtotal) * 0.15
		}

		if day%2 == 0 && totalTicket >= 5 {
			discount = float32(subtotal) * 0.20
		} else if day%2 == 0 && totalTicket < 5 {
			discount = float32(subtotal) * 0.10
		}
	}

	return totalPrice - discount

}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(GetTicketPrice(4, 0, 0, 13))
}
