package main

import (
	"fmt"
	"strings"
	"unicode"
)

func ReverseWord(str string) string {
	var result, word string
	var isAllUpper bool

	for i := 0; i <= len(str)-1; i++ {
		char := string(str[i])

		if char != " " {
			if unicode.IsUpper(rune(char[0])) {
				isAllUpper = true
			}

			if unicode.IsLower(rune(char[0])) {
				isAllUpper = false
			}

			word = char + word
		}

		if char == " " || i == len(str)-1 {
			if isAllUpper {
				word = strings.ToUpper(word)
			} else if len(word) > 0 && unicode.IsUpper(rune(word[len(word)-1])) {
				word = strings.ToUpper(string(word[0])) + strings.ToLower(word[1:])
			}

			result += word
			if char == " " {
				result += " "
			}
			word = ""
			isAllUpper = false
		}
	}

	return result
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(ReverseWord("Aku Sayang Ibu"))
	// Uka Gnayans Ubi
	fmt.Println(ReverseWord("A bird fly to the Sky"))
	// A drib ylf ot eht Yks
}
