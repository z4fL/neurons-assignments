package main

import (
	"crypto/sha256"
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
)

type DBCredential struct {
	HostName     string
	DatabaseName string
	Username     string
	Password     string
	Port         string
}

// TODO: masukkan CAMP_ID kalian dan Credential Database kalian disini
var (
	CAMP_ID = "FS9794718"

	credential = DBCredential{
		HostName:     "localhost",
		DatabaseName: "exercise_db_1",
		Username:     "postgres",
		Password:     "dz654",
		Port:         "5432",
	}
)

func Connection() (db *sql.DB, err error) {
	//setup connection to database postgres
	psqlInfo := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		credential.HostName, credential.Port, credential.Username, credential.Password, credential.DatabaseName)

	db, err = sql.Open("postgres", psqlInfo)
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		return
	} else {
		fmt.Println("Successfully connected!")
		err = os.WriteFile("output.txt", []byte(CAMP_ID+" "+fmt.Sprintf("%x", sha256.Sum256([]byte(CAMP_ID)))), 0644)
		return db, err
	}
}

func main() {
	_, err := Connection()

	if err != nil {
		log.Fatal(err)
	}
}
