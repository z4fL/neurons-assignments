package main

import (
	"bufio"
	"encoding/csv"
	"errors"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
	"sync"
	"time"

	"a21hc3NpZ25tZW50/helper"
	"a21hc3NpZ25tZW50/model"
)

type StudentManager interface {
	Login(id string, name string) error
	Register(id string, name string, studyProgram string) error
	GetStudyProgram(code string) (string, error)
	ModifyStudent(name string, fn model.StudentModifier) error
}

type InMemoryStudentManager struct {
	sync.Mutex
	students             []model.Student
	studentStudyPrograms map[string]string
	//add map for tracking login attempts here
	failedLoginAttempts map[string]int
}

func NewInMemoryStudentManager() *InMemoryStudentManager {
	return &InMemoryStudentManager{
		students: []model.Student{
			{
				ID:           "A12345",
				Name:         "Aditira",
				StudyProgram: "TI",
			},
			{
				ID:           "B21313",
				Name:         "Dito",
				StudyProgram: "TK",
			},
			{
				ID:           "A34555",
				Name:         "Afis",
				StudyProgram: "MI",
			},
		},
		studentStudyPrograms: map[string]string{
			"TI": "Teknik Informatika",
			"TK": "Teknik Komputer",
			"SI": "Sistem Informasi",
			"MI": "Manajemen Informasi",
		},
		//inisialisasi failedLoginAttempts di sini:
		failedLoginAttempts: make(map[string]int),
	}
}

func ReadStudentsFromCSV(filename string) ([]model.Student, error) {
	file, err := os.Open(filename)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	reader := csv.NewReader(file)
	reader.FieldsPerRecord = 3 // ID, Name and StudyProgram

	var students []model.Student
	for {
		record, err := reader.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			return nil, err
		}

		student := model.Student{
			ID:           record[0],
			Name:         record[1],
			StudyProgram: record[2],
		}
		students = append(students, student)
	}
	return students, nil
}

func (sm *InMemoryStudentManager) GetStudents() []model.Student {
	if len(sm.students) == 0 {
		return []model.Student{}
	}

	return sm.students
}

func (sm *InMemoryStudentManager) Login(id string, name string) (string, error) {
	if id == "" || name == "" {
		return "", errors.New("ID or Name is undefined! ")
	}

	if sm.failedLoginAttempts[id] >= 3 {
		return "", errors.New("Login gagal: Batas maksimum login terlampaui")
	}

	isFound := false
	programStudyCode := ""

	for _, v := range sm.students {
		if v.ID == id && v.Name == name {
			isFound = true
			programStudyCode = v.StudyProgram
			sm.failedLoginAttempts[id] = 0
			break
		}
	}

	programStudyName := sm.studentStudyPrograms[programStudyCode]

	if !isFound {
		sm.failedLoginAttempts[id]++
		return "", errors.New("Login gagal: data mahasiswa tidak ditemukan")
	}

	// Login berhasil: Selamat datang Aditira! Kamu terdaftar di program studi: Teknik Informatika

	return "Login berhasil: Selamat datang " + name + "! Kamu terdaftar di program studi: " + programStudyName, nil
}

func (sm *InMemoryStudentManager) RegisterLongProcess() {
	// 30ms delay to simulate slow processing
	time.Sleep(30 * time.Millisecond)
}

func (sm *InMemoryStudentManager) Register(id string, name string, studyProgram string) (string, error) {
	// 30ms delay to simulate slow processing. DO NOT REMOVE THIS LINE
	sm.RegisterLongProcess()

	// Below lock is needed to prevent data race error. DO NOT REMOVE BELOW 2 LINES
	sm.Lock()
	defer sm.Unlock()

	if id == "" || name == "" || studyProgram == "" {
		return "", fmt.Errorf("ID, Name or StudyProgram is undefined%s", "!")
	}

	if _, exist := sm.studentStudyPrograms[studyProgram]; !exist {
		return "", errors.New("Study program " + studyProgram + " is not found")
	}

	for _, v := range sm.students {
		if v.ID == id {
			return "", fmt.Errorf("%segistrasi gagal: id sudah digunakan", "R")
		}
	}

	sm.students = append(sm.students, model.Student{ID: id, Name: name, StudyProgram: studyProgram})

	return "Registrasi berhasil: " + name + " (" + studyProgram + ")", nil
}

func (sm *InMemoryStudentManager) GetStudyProgram(code string) (string, error) {
	if code == "" {
		return "", fmt.Errorf("%sode is undefined%s", "C", "!")
	}

	if _, exist := sm.studentStudyPrograms[code]; !exist {
		return "", fmt.Errorf("%sode program studi tidak ditemukan", "K")
	}

	studyProgram := sm.studentStudyPrograms[code]

	return studyProgram, nil
}

func (sm *InMemoryStudentManager) ModifyStudent(name string, fn model.StudentModifier) (string, error) {
	isFound := false
	student := model.Student{}
	for _, v := range sm.students {
		if v.Name == name {
			student = v
			isFound = true
		}
	}

	if !isFound {
		return "", fmt.Errorf("%sahasiswa tidak ditemukan%s", "M", ".")
	}

	err := fn(&student)
	if err != nil {
		return "", err
	}

	return "Program studi mahasiswa berhasil diubah.", nil
}

func (sm *InMemoryStudentManager) ChangeStudyProgram(programStudi string) model.StudentModifier {
	if _, exist := sm.studentStudyPrograms[programStudi]; !exist {
		return func(s *model.Student) error {
			return fmt.Errorf("%sode program studi tidak ditemukan", "K")
		}
	}
	return func(s *model.Student) error {
		s.StudyProgram = programStudi
		return nil
	}
}

func (sm *InMemoryStudentManager) ImportStudents(filenames []string) error {
	startTime := time.Now()

	for _, filename := range filenames {
		students, err := ReadStudentsFromCSV(filename)
		if err != nil {
			return fmt.Errorf("gagal mengimpor data dari file %s: %w", filename, err)
		}

		sm.Lock()
		sm.students = append(sm.students, students...)
		sm.Unlock()
	}

	elapsedTime := time.Since(startTime)
	if elapsedTime < 50*time.Millisecond {
		time.Sleep(50*time.Millisecond - elapsedTime)
	}

	return nil
}

func (sm *InMemoryStudentManager) SubmitAssignmentLongProcess() {
	// 3000ms delay to simulate slow processing
	time.Sleep(30 * time.Millisecond)
}

func (sm *InMemoryStudentManager) SubmitAssignments(numAssignments int) {
	start := time.Now()

	taskQueue := make(chan int, numAssignments)
	done := make(chan bool)

	for i := 0; i < 3; i++ {
		go func() {
			for taskId := range taskQueue {
				sm.SubmitAssignmentLongProcess()
				fmt.Printf("Tugas %d selesai dikumpulkan\n", taskId+1)
				done <- true
			}
		}()
	}

	for i := 0; i < numAssignments; i++ {
		taskQueue <- i
	}

	for i := 0; i < numAssignments; i++ {
		<-done
	}
	close(taskQueue)

	elapsed := time.Since(start)
	fmt.Printf("Submitting %d assignments took %s\n", numAssignments, elapsed)
}

func main() {
	manager := NewInMemoryStudentManager()

	for {
		helper.ClearScreen()
		students := manager.GetStudents()
		for _, student := range students {
			fmt.Printf("ID: %s\n", student.ID)
			fmt.Printf("Name: %s\n", student.Name)
			fmt.Printf("Study Program: %s\n", student.StudyProgram)
			fmt.Println()
		}

		fmt.Println("Selamat datang di Student Portal!")
		fmt.Println("1. Login")
		fmt.Println("2. Register")
		fmt.Println("3. Get Study Program")
		fmt.Println("4. Modify Student")
		fmt.Println("5. Bulk Import Student")
		fmt.Println("6. Submit assignment")
		fmt.Println("7. Exit")

		reader := bufio.NewReader(os.Stdin)
		fmt.Print("Pilih menu: ")
		input, _ := reader.ReadString('\n')
		input = strings.TrimSpace(input)

		switch input {
		case "1":
			helper.ClearScreen()
			fmt.Println("=== Login ===")
			fmt.Print("ID: ")
			id, _ := reader.ReadString('\n')
			id = strings.TrimSpace(id)

			fmt.Print("Name: ")
			name, _ := reader.ReadString('\n')
			name = strings.TrimSpace(name)

			msg, err := manager.Login(id, name)
			if err != nil {
				fmt.Printf("Error: %s\n", err.Error())
			}
			fmt.Println(msg)
			// Wait until the user presses any key
			fmt.Println("Press any key to continue...")
			reader.ReadString('\n')
		case "2":
			helper.ClearScreen()
			fmt.Println("=== Register ===")
			fmt.Print("ID: ")
			id, _ := reader.ReadString('\n')
			id = strings.TrimSpace(id)

			fmt.Print("Name: ")
			name, _ := reader.ReadString('\n')
			name = strings.TrimSpace(name)

			fmt.Print("Study Program Code (TI/TK/SI/MI): ")
			code, _ := reader.ReadString('\n')
			code = strings.TrimSpace(code)

			msg, err := manager.Register(id, name, code)
			if err != nil {
				fmt.Printf("Error: %s\n", err.Error())
			}
			fmt.Println(msg)
			// Wait until the user presses any key
			fmt.Println("Press any key to continue...")
			reader.ReadString('\n')
		case "3":
			helper.ClearScreen()
			fmt.Println("=== Get Study Program ===")
			fmt.Print("Program Code (TI/TK/SI/MI): ")
			code, _ := reader.ReadString('\n')
			code = strings.TrimSpace(code)

			if studyProgram, err := manager.GetStudyProgram(code); err != nil {
				fmt.Printf("Error: %s\n", err.Error())
			} else {
				fmt.Printf("Program Studi: %s\n", studyProgram)
			}
			// Wait until the user presses any key
			fmt.Println("Press any key to continue...")
			reader.ReadString('\n')
		case "4":
			helper.ClearScreen()
			fmt.Println("=== Modify Student ===")
			fmt.Print("Name: ")
			name, _ := reader.ReadString('\n')
			name = strings.TrimSpace(name)

			fmt.Print("Program Studi Baru (TI/TK/SI/MI): ")
			code, _ := reader.ReadString('\n')
			code = strings.TrimSpace(code)

			msg, err := manager.ModifyStudent(name, manager.ChangeStudyProgram(code))
			if err != nil {
				fmt.Printf("Error: %s\n", err.Error())
			}
			fmt.Println(msg)

			// Wait until the user presses any key
			fmt.Println("Press any key to continue...")
			reader.ReadString('\n')
		case "5":
			helper.ClearScreen()
			fmt.Println("=== Bulk Import Student ===")

			// Define the list of CSV file names
			csvFiles := []string{"students1.csv", "students2.csv", "students3.csv"}

			err := manager.ImportStudents(csvFiles)
			if err != nil {
				fmt.Printf("Error: %s\n", err.Error())
			} else {
				fmt.Println("Import successful!")
			}

			// Wait until the user presses any key
			fmt.Println("Press any key to continue...")
			reader.ReadString('\n')

		case "6":
			helper.ClearScreen()
			fmt.Println("=== Submit Assignment ===")

			// Enter how many assignments you want to submit
			fmt.Print("Enter the number of assignments you want to submit: ")
			numAssignments, _ := reader.ReadString('\n')

			// Convert the input to an integer
			numAssignments = strings.TrimSpace(numAssignments)
			numAssignmentsInt, err := strconv.Atoi(numAssignments)

			if err != nil {
				fmt.Println("Error: Please enter a valid number")
			}

			manager.SubmitAssignments(numAssignmentsInt)

			// Wait until the user presses any key
			fmt.Println("Press any key to continue...")
			reader.ReadString('\n')
		case "7":
			helper.ClearScreen()
			fmt.Println("Goodbye!")
			return
		default:
			helper.ClearScreen()
			fmt.Println("Pilihan tidak valid!")
			helper.Delay(5)
		}

		fmt.Println()
	}
}
