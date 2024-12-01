package main

import (
	"fmt"
	"strconv"
)

func BiggestPairNumber(numbers int) int {
	toInt := strconv.Itoa(numbers)
	biggestPair := 0
	biggestSumPair := 0

	for i := 0; i < len(toInt)-1; i++ {
		num, _ := strconv.Atoi(string(toInt[i]))
		var nextNum int
		if i < len(toInt)-1 {
			nextNum, _ = strconv.Atoi(string(toInt[i+1]))
		}

		sumPair := num + nextNum

		if sumPair > biggestSumPair {
			biggestSumPair = sumPair
			str := strconv.Itoa(num) + strconv.Itoa(nextNum)
			biggestPair, _ = strconv.Atoi(str)
		}

	}
	return biggestPair
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(BiggestPairNumber(89083278))
}
