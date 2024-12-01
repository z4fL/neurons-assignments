package main

import (
	"fmt"
)

func FindMin(nums ...int) int {
	min := 0
	for i := 0; i < len(nums); i++ {
		num := nums[i]

		if num < min || min == 0 {
			min = num
		}
	}
	return min
}

func FindMax(nums ...int) int {
	max := 0
	for i := 0; i < len(nums); i++ {
		num := nums[i]

		if num > max || max == 0 {
			max = num
		}
	}
	return max
}

func SumMinMax(nums ...int) int {
	min := FindMin(nums...)
	max := FindMax(nums...)

	return min + max
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(SumMinMax(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
	fmt.Println(SumMinMax(333, 456, 654, 123, 111, 1000, 1500, 2000, 3000, 1250, 1111))
}
