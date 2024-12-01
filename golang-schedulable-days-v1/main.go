package main

import "fmt"

func SchedulableDays(date1 []int, date2 []int) []int {
	result := make([]int, 0)

	if len(date1) == 0 && len(date2) == 0 {
		return result
	}

	for _, a := range date1 {
		for _, b := range date2 {
			if a == b {
				result = append(result, a)
			}
		}
	}

	return result
}

func main() {
	fmt.Println(SchedulableDays([]int{11, 12, 13, 14, 15}, []int{5, 10, 12, 13, 20, 21}))
}
