package main

import (
	"fmt"
	"strconv"
	"strings"
)

func PhoneNumberChecker(number string, result *string) {
	var (
		code   string
		sixTwo string = "62"
		eight  string = "8"
	)

	for i := 0; i < len(number); i++ {
		char := string(number[i])
		code += char

		if len(code) == 2 {
			if !strings.Contains(code, sixTwo) && !strings.Contains(code, eight) {
				*result = "invalid"
				break
			}
			if (strings.Contains(code, sixTwo) && len(number) <= 11) || (strings.Contains(code, eight) && len(number) <= 10) {
				*result = "invalid"
				break
			}
		}

		if (len(code) == 4 && strings.Contains(code, eight)) || (len(code) == 5 && strings.Contains(code, sixTwo)) {
			provider, _ := strconv.Atoi(code)

			if (provider >= 811 && provider <= 815) || (provider >= 62811 && provider <= 62815) {
				*result = "Telkomsel"
			} else if (provider >= 816 && provider <= 819) || (provider >= 62816 && provider <= 62819) {
				*result = "Indosat"
			} else if (provider >= 821 && provider <= 823) || (provider >= 62821 && provider <= 62823) {
				*result = "XL"
			} else if (provider >= 827 && provider <= 829) || (provider >= 62827 && provider <= 62829) {
				*result = "Tri"
			} else if (provider >= 852 && provider <= 853) || (provider >= 62852 && provider <= 62853) {
				*result = "AS"
			} else if (provider >= 881 && provider <= 888) || (provider >= 62881 && provider <= 62888) {
				*result = "Smartfren"
			} else {
				*result = "invalid"
			}
		}

	}
}

func main() {
	// bisa digunakan untuk pengujian test case
	var number = "081211111111"
	var result string

	PhoneNumberChecker(number, &result)
	fmt.Println(result)
}
