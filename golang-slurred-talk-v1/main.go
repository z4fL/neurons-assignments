package main

import "fmt"

func SlurredTalk(words *string) {
	for i := 0; i < len(*words); i++ {
		char := string((*words)[i])

		if char == "S" || char == "R" || char == "Z" || char == "s" || char == "r" || char == "z" {
			if char == "S" || char == "R" || char == "Z" {
				*words = (*words)[:i] + "L" + (*words)[i+1:]
			} else {
				*words = (*words)[:i] + "l" + (*words)[i+1:]
			}
		}
	}

}

func main() {
	// bisa dicoba untuk pengujian test case
	var words string = "Semangat pagi semuanya, semoga sehat selalu. Sehingga selalu bisa senyum"
	SlurredTalk(&words)
	fmt.Println(words)
}
