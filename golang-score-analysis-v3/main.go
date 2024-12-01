package main

import "fmt"

type School struct {
	Name    string
	Address string
	Grades  []int
}

func (s *School) AddGrade(grades ...int) {
	s.Grades = append(s.Grades, grades...)
}

func Analysis(s School) (float64, int, int) {
	var (
		average float64 = 0
		min     int     = 0
		max     int     = 0
	)

	s.AddGrade(s.Grades...)

	if len(s.Grades) == 0 {
		return average, min, max
	}

	for _, nilai := range s.Grades {
		if nilai > max {
			max = nilai
		}

		if min == 0 || nilai < min {
			min = nilai
		}

		average += float64(nilai)
	}

	average = average / float64(len(s.Grades))
	return average, min, max
}

// gunakan untuk melakukan debugging
func main() {
	avg, min, max := Analysis(School{
		Name:    "Imam Assidiqi School",
		Address: "Jl. Imam Assidiqi",
		Grades:  []int{},
	})

	fmt.Println(avg, min, max)
}
