package main

import (
	"fmt"
	"log"

	_ "embed"

	_ "github.com/lib/pq"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Credential struct {
	Host         string
	Username     string
	Password     string
	DatabaseName string
	Port         int
	Schema       string
}

type School struct {
	gorm.Model
	Name     string `gorm:"type:varchar(100);unique_index"`
	Phone    string
	Address  string
	Province string
}

type Class struct {
	gorm.Model
	Name string `gorm:"type:varchar(100);unique_index"`
}

type Lesson struct {
	gorm.Model
	Name string `gorm:"type:varchar(100);unique_index"`
}

type Teacher struct {
	gorm.Model
	Name     string `gorm:"type:varchar(100);unique_index"`
	Email    string
	Phone    string
	LessonID uint
	ClassID  uint
	SchoolID uint
}

type Joined struct {
	TeacherName string
	SchoolName  string
	ClassName   string
	LessonName  string
}

func (s School) Init(db *gorm.DB) error {
	if err := db.Create(&s).Error; err != nil {
		return err
	}
	return nil
}

func (c Class) Init(db *gorm.DB) error {
	if err := db.Create(&c).Error; err != nil {
		return err
	}
	return nil
}

func (l Lesson) Init(db *gorm.DB) error {
	if err := db.Create(&l).Error; err != nil {
		return err
	}
	return nil
}

func (t Teacher) Init(db *gorm.DB) error {
	if err := db.Create(&t).Error; err != nil {
		return err
	}
	return nil
}

func (t Teacher) Join(db *gorm.DB) ([]Joined, error) {
	var result []Joined
	err := db.Table("teachers").
		Select("teachers.name as teacher_name, schools.name as school_name, classes.name as class_name, lessons.name as lesson_name").
		Joins("join schools on schools.id = teachers.school_id").
		Joins("join classes on classes.id = teachers.class_id").
		Joins("join lessons on lessons.id = teachers.lesson_id").
		Scan(&result).Error
	if err != nil {
		return nil, err
	}
	return result, nil
}

func Connect(creds *Credential) (*gorm.DB, error) {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%d sslmode=disable TimeZone=Asia/Jakarta", creds.Host, creds.Username, creds.Password, creds.DatabaseName, creds.Port)

	dbConn, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}
	return dbConn, nil
}

func Reset(db *gorm.DB, table string) error {
	return db.Transaction(func(tx *gorm.DB) error {
		if err := tx.Exec("TRUNCATE " + table).Error; err != nil {
			return err
		}

		if err := tx.Exec("ALTER SEQUENCE " + table + "_id_seq RESTART WITH 1").Error; err != nil {
			return err
		}

		return nil
	})
}

func main() {
	dbCredential := Credential{
		Host:         "localhost",
		Username:     "postgres",
		Password:     "dz654",
		DatabaseName: "join_gorm",
		Port:         5432,
	}

	dbConn, err := Connect(&dbCredential)
	if err != nil {
		log.Fatal(err)
	}

	dbConn.AutoMigrate(&School{}, &Class{}, &Lesson{}, &Teacher{})

	school := School{
		Name:     "SMAN 1 Jakarta",
		Phone:    "(021) 3865001",
		Address:  "Jl. Budi Utomo No.7, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710",
		Province: "Jakarta",
	}

	school.Init(dbConn)
	class := Class{Name: "IPA - 1"}
	class.Init(dbConn)
	lesson := Lesson{Name: "Matematika"}
	lesson.Init(dbConn)
	teacher := Teacher{
		Name:     "Aditira",
		Email:    "aditira@gmail.com",
		Phone:    "083831923308",
		SchoolID: 1,
		ClassID:  1,
		LessonID: 1,
	}

	teacher.Init(dbConn)
	res, err := teacher.Join(dbConn)
	if err != nil {
		log.Fatal(err)
	}

	for _, join := range res {
		fmt.Println(join)
	}

	Reset(dbConn, "schools")
	Reset(dbConn, "classes")
	Reset(dbConn, "lessons")
	Reset(dbConn, "teachers")
}
