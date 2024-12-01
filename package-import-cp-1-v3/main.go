package main

import (
	"a21hc3NpZ25tZW50/internal"
	"fmt"
	"strconv"
	"strings"
)

func AdvanceCalculator(calculate string) float32 {
	splitter := strings.Split(calculate, " ")
	angka1, _ := strconv.ParseFloat(splitter[0], 32)

	calculator := internal.NewCalculator(float32(angka1))

	for i := 1; i < len(splitter); i += 2 {
		fmt.Println(splitter[i], splitter[i+1])

		operator := splitter[i]
		angka, _ := strconv.ParseFloat(splitter[i+1], 32)

		switch operator {
		case "*":
			calculator.Multiply(float32(angka))
		case "/":
			calculator.Divide(float32(angka))
		case "+":
			calculator.Add(float32(angka))
		case "-":
			calculator.Subtract(float32(angka))
		}
	}

	return calculator.Result()
}

func main() {
	res := AdvanceCalculator("3 * 4 / 2 + 10 - 5") // 3*4 = 12/2 = 6 + 10 = 16 - 5 = 11

	fmt.Println(res)
}
