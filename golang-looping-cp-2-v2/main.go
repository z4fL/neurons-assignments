package main

import "fmt"

func ReverseString(str string) string {
	var result string
	var word string

	for i := len(str) - 1; i >= 0; i-- {
		char := string(str[i])

		nextChar := ""
		if i > 0 {
			nextChar = string(str[i-1])
		}

		word += char

		if (char != " " && nextChar != " ") && i != 0 {
			word += "_"
		}

		if char == " " || i == 0 {
			result += word
			word = ""
		}
	}

	return result
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(ReverseString("Hello World"))
	// hello World => d_l_r_o_W o_l_l_e_H
}
