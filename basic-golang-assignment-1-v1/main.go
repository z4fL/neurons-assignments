package main

import (
	"a21hc3NpZ25tZW50/helper"
	"fmt"
	"strings"
)

var Students string = "A1234_Aditira_TI, B2131_Dito_TK, A3455_Afis_MI"
var StudentStudyPrograms string = "TI_Teknik Informatika, TK_Teknik Komputer, SI_Sistem Informasi, MI_Manajemen Informasi"

func Login(id string, name string) string {
	if len(id) == 0 || len(name) == 0 {
		return "ID or Name is undefined!"
	}

	if len(id) < 5 || len(id) > 5 {
		return "ID must be 5 characters long!"
	}

	var word, result, programStudy string
	var isContain = false

	for i := 0; i < len(Students); i++ {
		char := string(Students[i])

		if char == " " {
			continue
		}

		if char == "," || i == len(Students)-1 {
			if i == len(Students)-1 {
				word += char
			}
			result = word
			word = ""
		} else {
			word += char
			result = ""
		}

		if len(result) != 0 {
			if strings.Contains(result, id) && strings.Contains(result, name) {
				underscore := 0
				for j := 0; j < len(result); j++ {
					if string(result[j]) == "_" {
						underscore++
						if underscore == 2 {
							programStudy = result[j+1:]
						}
					}
				}
				isContain = true
				break
			}
		}
	}

	if !isContain {
		return "Login gagal: data mahasiswa tidak ditemukan"
	}

	return "Login berhasil: " + name + " (" + programStudy + ")"
}

func Register(id string, name string, major string) string {
	if len(id) == 0 || len(name) == 0 || len(major) == 0 {
		return "ID, Name or Major is undefined!"
	}
	if len(id) < 5 || len(id) > 5 {
		return "ID must be 5 characters long!"
	}

	var word, result, idStudent string

	for i := 0; i < len(Students); i++ {
		char := string(Students[i])

		if char == " " {
			continue
		}

		if char == "," || i == len(Students)-1 {
			result = word
			word = ""
		} else {
			word += char
			result = ""
		}

		if len(result) != 0 {
			if !strings.Contains(result, id) {
				idStudent = id + "_" + name + "_" + major
			} else {
				fmt.Println(result, id)
				return "Registrasi gagal: id sudah digunakan"
			}
		}
	}

	Students += ", " + idStudent

	return "Registrasi berhasil: " + name + " (" + major + ")"
}

func GetStudyProgram(code string) string {
	if len(code) == 0 {
		return "Code is undefined!"
	}

	var word, result, major string

	for i := 0; i < len(StudentStudyPrograms); i++ {
		char := string(StudentStudyPrograms[i])

		if char == "," || i == len(StudentStudyPrograms)-1 {
			if i == len(StudentStudyPrograms)-1 {
				word += char
			}

			result = word
			word = ""
		} else {
			word += char
			result = ""
		}

		if len(result) != 0 {
			if strings.Contains(result, code) {
				isSpace := 0
				if string(result[0]) == " " {
					isSpace = 1
				}
				major = result[len(code)+1+isSpace:]
				break
			}
		}
	}

	return major
}

func main() {

	fmt.Println("Selamat datang di Student Portal!")

	for {
		helper.ClearScreen()
		fmt.Println("Students: ", Students)
		fmt.Println("Student Study Programs: ", StudentStudyPrograms)

		fmt.Println("\nPilih menu:")
		fmt.Println("1. Login")
		fmt.Println("2. Register")
		fmt.Println("3. Get Program Study")
		fmt.Println("4. Keluar")

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
			fmt.Println("Terima kasih telah menggunakan Student Portal.")
			return
		default:
			fmt.Println("Pilihan tidak valid.")
		}
	}
}
