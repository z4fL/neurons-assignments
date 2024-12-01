package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type Report struct {
	Id       string  `json:"id"`
	Name     string  `json:"name"`
	Date     string  `json:"date"`
	Semester int     `json:"semester"`
	Studies  []Study `json:"studies"`
}

type Study struct {
	StudyName   string `json:"study_name"`
	StudyCredit int    `json:"study_credit"`
	Grade       string `json:"grade"`
}

// gunakan fungsi ini untuk mengambil data dari file json
// kembalian berupa struct 'Report' dan error
func ReadJSON(filename string) (Report, error) {
	data, err := os.ReadFile(filename)
	if err != nil {
		panic(err)
	}

	report := Report{}
	err = json.Unmarshal(data, &report)
	if err != nil {
		panic(err)
	}

	return report, nil
}

func GradePoint(report Report) float64 {
	var result float64
	jumlahNilaiMatkul := 0.0
	jumlahStudyCredit := 0

	if len(report.Studies) == 0 {
		return 0.0
	}

	for _, v := range report.Studies {
		nilaiSkala := 0.0
		if v.Grade == "A" {
			nilaiSkala = 4
		} else if v.Grade == "AB" {
			nilaiSkala = 3.5
		} else if v.Grade == "B" {
			nilaiSkala = 3
		} else if v.Grade == "BC" {
			nilaiSkala = 2.5
		} else if v.Grade == "C" {
			nilaiSkala = 2
		} else if v.Grade == "CD" {
			nilaiSkala = 1.5
		} else if v.Grade == "D" {
			nilaiSkala = 1
		} else if v.Grade == "DE" {
			nilaiSkala = 0.5
		} else if v.Grade == "E" {
			nilaiSkala = 0
		}

		jumlahNilaiMatkul += nilaiSkala * float64(v.StudyCredit)
		jumlahStudyCredit += v.StudyCredit
	}

	result = jumlahNilaiMatkul / float64(jumlahStudyCredit)

	return result
}

func main() {
	// bisa digunakan untuk menguji test case
	report, err := ReadJSON("report.json")
	if err != nil {
		panic(err)
	}

	gradePoint := GradePoint(report)
	fmt.Println(gradePoint)
}
