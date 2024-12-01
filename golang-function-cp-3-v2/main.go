package main

import (
	"fmt"
)

func FindShortestName(names string) string {
	var name, word string

	for i := 0; i < len(names); i++ {
		char := string(names[i])

		if char == " " || char == "," || char == ";" || i == len(names)-1 {
			if i == len(names)-1 && char != " " && char != "," && char != ";" {
				word += char
			}
			if name == "" || len(word) < len(name) || len(word) == len(name) {
				if name == "" {
					name = word
				} else if len(word) < len(name) {
					name = word
				} else if word < name {
					name = word
				}
			}
			word = ""
		} else {
			word += char
		}

	}

	return name
}

// gunakan untuk melakukan debug
func main() {
	// fmt.Println(FindShortestName("Hanif Joko Tio Andi Budi Caca Hamdan")) // "Tio"
	fmt.Println(FindShortestName("Budi;Tia;Tio")) // "Tia"
	// fmt.Println(FindShortestName("Ari,Aru,Ara,Andi,Asik"))                // "Tia"
}
