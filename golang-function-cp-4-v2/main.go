package main

import (
	"fmt"
	"strings"
)

func FindSimilarData(input string, data ...string) string {
	var result string

	for i := 0; i < len(data); i++ {
		if strings.Contains(data[i], input) {
			if result != "" {
				result += ","
			}
			result += data[i]
		}
	}

	return result
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(FindSimilarData("iphone", "laptop", "iphone 13", "iphone 12", "iphone 12 pro"))
	fmt.Println(FindSimilarData("mobil", "mobil APV", "mobil Avanza", "motor matic", "motor gede"))
}
