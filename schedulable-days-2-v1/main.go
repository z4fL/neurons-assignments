package main

import "fmt"

func SchedulableDays(villager [][]int) []int {
	if len(villager) == 0 {
		return []int{}
	}

	if len(villager) == 1 {
		return villager[0]
	}

	result := make([]int, 0)

	for i := 1; i < len(villager); i++ {
		sameDay := []int{}

		for _, day := range villager[0] { // iterate first array
			for _, nextDay := range villager[i] { // iterate next array + 1
				if day == nextDay {
					sameDay = append(sameDay, day)
					break
				}
			}
		}

		result = sameDay
	}

	return result
}

func main() {
	fmt.Println(SchedulableDays([][]int{{7, 12, 19, 22}, {12, 19, 21, 23}, {7, 12, 19}, {12, 19}}))
	fmt.Println(SchedulableDays([][]int{{1, 2, 3}}))
}
