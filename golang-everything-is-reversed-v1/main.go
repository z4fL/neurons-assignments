package main

import "fmt"

func ReverseData(arr [5]int) [5]int {
	var result [5]int

	for i, num := range arr {
		reversed := 0
		for num != 0 {
			reversed = reversed*10 + num%10
			num /= 10
		}

		result[len(arr)-1-i] = reversed
	}

	return result
}

func main() {
	fmt.Println(ReverseData([5]int{123, 456, 11, 1, 2}))
	fmt.Println(ReverseData([5]int{456789, 44332, 2221, 12, 10}))
	fmt.Println(ReverseData([5]int{10, 10, 10, 10, 10}))
}
