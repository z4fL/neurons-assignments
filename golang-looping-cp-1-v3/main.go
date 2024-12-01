package main

import "fmt"

func CountingNumber(n int) float64 {

	var result float64 = 1

	i := 1.0

	for {
		if i >= float64(n) {
			break
		}
		result += float64(i) + 0.5

		i += 0.5
	}

	return result
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(CountingNumber(5))
}
