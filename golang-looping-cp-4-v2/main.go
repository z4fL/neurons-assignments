package main

import "fmt"

func EmailInfo(email string) string {
	var domain, TLD string
	var atIndex, dotIndex int = -1, -1

	for i := 0; i < len(email); i++ {
		if string(email[i]) == "@" {
			atIndex = i
			break
		}
	}

	for i := atIndex + 1; i < len(email); i++ {
		char := string(email[i])
		if char == "." {
			dotIndex = i
			break
		} else if dotIndex == -1 {
			domain += char
		}
	}

	for i := dotIndex + 1; i < len(email); i++ {
		char := string(email[i])
		TLD += char
	}

	return "Domain: " + domain + " dan TLD: " + TLD

}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(EmailInfo("admin@yahoo.co.id"))
}
