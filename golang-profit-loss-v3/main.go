package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func Readfile(path string) ([]string, error) {
	file, err := os.ReadFile(path)
	if err != nil {
		panic(err)
	}

	result := make([]string, 0)

	if len(string(file)) == 0 {
		return result, nil
	}

	data := strings.Split(string(file), "\n")

	result = append(result, data...)

	return result, nil
}

func CalculateProfitLoss(data []string) string {
	typeOf := ""
	amount := 0

	income := 0
	expense := 0
	result := ""

	for i, v := range data {
		value := strings.Split(v, ";")

		typeOf = value[1]
		amount, _ = strconv.Atoi(value[2])

		if typeOf == "income" {
			income += amount
		} else if typeOf == "expense" {
			expense += amount
		}

		if i == len(data)-1 {
			total := 0
			profOrLoss := ""
			if income > expense {
				total = income - expense
				profOrLoss = "profit"
			} else if income < expense {
				total = expense - income
				profOrLoss = "loss"
			}

			result = fmt.Sprintf("%s;%s;%d", value[0], profOrLoss, total)
		}
	}

	return result
}

func main() {
	// bisa digunakan untuk pengujian
	datas, err := Readfile("transactions.txt")
	if err != nil {
		panic(err)
	}

	result := CalculateProfitLoss(datas)
	fmt.Println(result)
}
