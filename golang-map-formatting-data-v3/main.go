package main

import (
	"fmt"
	"strconv"
)

// TODO: answer here

func ChangeOutput(data []string) map[string][]string {
	result := map[string][]string{}

	for _, value := range data {
		word := ""
		key := ""
		index := 0
		position := ""
		countStrip := 0

		for i := 0; i < len(value); i++ {
			char := string(value[i])

			if char != "-" {
				word += char
			}

			if char == "-" || i == len(value)-1 {
				if char == "-" {
					countStrip++
				}

				if countStrip == 1 {
					key = word
					if _, exist := result[key]; !exist {
						result[key] = make([]string, 0)
					}
					word = ""
				} else if countStrip == 2 {
					index, _ = strconv.Atoi(word)
					for len(result[key]) <= index {
						result[key] = append(result[key], "")
					}
					word = ""
				} else if countStrip == 3 {
					position = word
					word = ""
					countStrip = 0
				}

				if i == len(value)-1 {
					if position == "first" {
						result[key][index] = word + result[key][index]
					}
					if position == "last" {
						result[key][index] += " " + word
					}
				}

			}

		}

	}

	return result
}

// bisa digunakan untuk melakukan debug
func main() {
	data := []string{
		"account-0-first-John",
		"account-0-last-Doe",
		"account-1-first-Jane",
		"account-1-last-Doe",
		"address-0-first-Jaksel",
		"address-0-last-Jakarta",
		"address-1-first-Bandung",
		"address-1-last-Jabar",
		"phone-0-first-081234567890",
		"phone-1-first-081234567891",
	}
	res := ChangeOutput(data)

	fmt.Println(res)
}
