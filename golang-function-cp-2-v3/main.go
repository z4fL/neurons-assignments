package main

import (
	"fmt"
)

func CountVowelConsonant(str string) (int, int, bool) {
	var vowel, consonant string

	for i := 0; i < len(str); i++ {
		char := str[i]

		if char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
			char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U' {
			vowel += string(char)
		} else if (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') {
			consonant += string(char)
		}
	}
	noVowel := len(vowel) == 0
	noConsonant := len(consonant) == 0
	var result bool
	if noVowel || noConsonant {
		result = true
	}

	return len(vowel), len(consonant), result
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(CountVowelConsonant("Hidup Itu Indah"))
}
