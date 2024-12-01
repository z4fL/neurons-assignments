package main

import (
	"a21hc3NpZ25tZW50/helper"
	"fmt"
)

var Students = []string{
	"A1234_Aditira_TI",
	"B2131_Dito_TK",
	"A3455_Afis_MI",
}

var StudentStudyPrograms = map[string]string{
	"TI": "Teknik Informatika",
	"TK": "Teknik Komputer",
	"SI": "Sistem Informasi",
	"MI": "Manajemen Informasi",
}

type studentModifier func(string, *string)

func Login(id string, name string) string {
	if id == "" || name == "" {
		return "ID or Name is undefined!"
	}
	result := ""
	isFound := false

	for _, value := range Students {
		underScoreCount := 0
		word := ""
		idStudent := ""
		nameStudent := ""

		for i := 0; i < len(value); i++ {
			char := string(value[i])

			if char != "_" {
				word += char
			} else if char == "_" {
				underScoreCount++

				if underScoreCount == 1 {
					idStudent = word
					word = ""
				} else if underScoreCount == 2 {
					nameStudent = word
					word = ""

					if idStudent == id && nameStudent == name {
						result = nameStudent
						isFound = true
						break
					}
				}
			}
		}
	}

	if !isFound {
		return "Login gagal: data mahasiswa tidak ditemukan"
	}

	return "Login berhasil: " + result
}

func Register(id string, name string, major string) string {
	if id == "" || name == "" || major == "" {
		return "ID, Name or Major is undefined!"
	}

	result := ""
	isFound := false

	for _, v := range Students {
		underScoreCount := 0
		word := ""
		idStudent := ""

		for i := 0; i < len(v); i++ {
			char := string(v[i])
			if char != "_" {
				word += char
			} else if char == "_" {
				underScoreCount++

				if underScoreCount == 1 {
					idStudent = word
					word = ""
					if idStudent == id {
						isFound = true
						break
					}

				}
			}
		}
	}

	if !isFound {
		Students = append(Students, fmt.Sprintf("%s_%s_%s", id, name, major))
		result = fmt.Sprintf("Registrasi berhasil: %s (%s)", name, major)
	} else {
		return "Registrasi gagal: id sudah digunakan"
	}

	return result
}

func GetStudyProgram(code string) string {
	result := ""
	for key, value := range StudentStudyPrograms {
		if key == code {
			result = value
		}
	}

	if result == "" {
		return "Kode program studi tidak ditemukan"
	}

	return result
}

func ModifyStudent(programStudi, nama string, fn studentModifier) string {
	isFound := false
	dataStudent := ""

	for _, value := range Students {
		underScoreCount := 0
		word := ""
		nameStudent := ""

		for i := 0; i < len(value); i++ {
			char := string(value[i])

			if char != "_" {
				word += char
			} else if char == "_" {
				underScoreCount++

				if underScoreCount == 1 {
					word = ""
				} else if underScoreCount == 2 {
					nameStudent = word
					word = ""

					if nameStudent == nama {
						isFound = true
						dataStudent = value
						break
					}
				}
			}
		}
	}

	if isFound {
		fn(programStudi, &dataStudent)

		return "Program studi mahasiswa berhasil diubah."
	}

	return "Mahasiswa tidak ditemukan."
}

func UpdateStudyProgram(programStudi string, students *string) {

	underScoreCount := 0
	word := ""
	idStudent := ""
	nameStudent := ""

	for i := 0; i < len(*students); i++ {
		char := string((*students)[i])

		if char != "_" {
			word += char
		}
		if char == "_" {
			underScoreCount++

			if underScoreCount == 1 {
				idStudent = word
				word = ""
			} else if underScoreCount == 2 {
				nameStudent = word
				word = ""
			}

		}
	}

	for i, data := range Students {
		if data == *students {
			Students[i] = fmt.Sprintf("%s_%s_%s", idStudent, nameStudent, programStudi)
		}
	}

}

func main() {
	fmt.Println("Selamat datang di Student Portal!")

	for {
		helper.ClearScreen()
		for i, student := range Students {
			fmt.Println(i+1, student)
		}

		fmt.Println("\nPilih menu:")
		fmt.Println("1. Login")
		fmt.Println("2. Register")
		fmt.Println("3. Get Program Study")
		fmt.Println("4. Change student study program")
		fmt.Println("5. Keluar")

		var pilihan string
		fmt.Print("Masukkan pilihan Anda: ")
		fmt.Scanln(&pilihan)

		switch pilihan {
		case "1":
			helper.ClearScreen()
			var id, name string
			fmt.Print("Masukkan id: ")
			fmt.Scan(&id)
			fmt.Print("Masukkan name: ")
			fmt.Scan(&name)

			fmt.Println(Login(id, name))

			helper.Delay(5)
		case "2":
			helper.ClearScreen()
			var id, name, jurusan string
			fmt.Print("Masukkan id: ")
			fmt.Scan(&id)
			fmt.Print("Masukkan name: ")
			fmt.Scan(&name)
			fmt.Print("Masukkan jurusan: ")
			fmt.Scan(&jurusan)
			fmt.Println(Register(id, name, jurusan))

			helper.Delay(5)
		case "3":
			helper.ClearScreen()
			var kode string
			fmt.Print("Masukkan kode: ")
			fmt.Scan(&kode)

			fmt.Println(GetStudyProgram(kode))
			helper.Delay(5)
		case "4":
			helper.ClearScreen()
			var nama, programStudi string
			fmt.Print("Masukkan nama mahasiswa: ")
			fmt.Scanln(&nama)
			fmt.Print("Masukkan program studi baru: ")
			fmt.Scanln(&programStudi)

			fmt.Println(ModifyStudent(programStudi, nama, UpdateStudyProgram))
			helper.Delay(5)
		case "5":
			fmt.Println("Terima kasih telah menggunakan Student Portal.")
			return
		default:
			fmt.Println("Pilihan tidak valid.")
		}
	}
}
