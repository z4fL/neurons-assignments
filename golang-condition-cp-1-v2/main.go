package main

import "fmt"

func GraduateStudent(score int, absent int) string {
	var result string
	if score >= 70 && absent < 5 {
		result = "lulus"
	} else if score < 70 || absent >= 5 {
		result = "tidak lulus"
	}

	return result
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(GraduateStudent(70, 4))
}
