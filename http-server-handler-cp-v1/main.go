package main

import (
	"fmt"
	"net/http"
	"time"
)

func GetHandler() http.HandlerFunc {
	weekDay := time.Now().Weekday()
	day := time.Now().Day()
	month := time.Now().Month()
	year := time.Now().Year()

	return func(writer http.ResponseWriter, request *http.Request) {
		writer.Write([]byte(fmt.Sprintf("%v, %d %v %d", weekDay, day, month, year)))
	}
}

func main() {
	http.ListenAndServe("localhost:8080", GetHandler())
}
