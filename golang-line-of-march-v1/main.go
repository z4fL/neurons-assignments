package main

import "fmt"

func Sortheight(height []int) []int {
	result := make([]int, len(height))
	copy(result, height)

	for i := 0; i < len(result); i++ {
		for j := 0; j < len(result)-i-1; j++ {
			if result[j] > result[j+1] {
				// Tukar elemen
				result[j], result[j+1] = result[j+1], result[j]
			}
		}
	}

	return result
}

func main() {
	fmt.Println(Sortheight([]int{172, 170, 150, 165, 144, 155, 159}))
}
