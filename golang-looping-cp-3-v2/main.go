package main

import "fmt"

func CountingLetter(text string) int {
	// unreadable letters = R, S, T, Z
	var total int

	for i := 0; i < len(text); i++ {
		char := string(text[i])

		if char == "R" || char == "S" || char == "T" || char == "Z" || char == "r" || char == "s" || char == "t" || char == "z" {
			total++
		}
	}

	return total

}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(CountingLetter("Semangat"))
}
