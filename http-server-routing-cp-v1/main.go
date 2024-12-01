package main

import (
	"fmt"
	"net/http"
	"time"
)

func TimeHandler() http.HandlerFunc {
	weekDay := time.Now().Weekday()
	day := time.Now().Day()
	month := time.Now().Month()
	year := time.Now().Year()

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(fmt.Sprintf("%v, %d %v %d", weekDay, day, month, year)))
	})
}

func SayHelloHandler() http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		param := r.URL.Query().Get("name")
		result := ""

		if param == "" {
			result = "Hello there"
		} else {
			result = fmt.Sprintf("Hello, %s!", param)

		}

		w.Write([]byte(result))
	})
}

func main() {

	http.HandleFunc("/time", TimeHandler())
	http.HandleFunc("/hello", SayHelloHandler())

	http.ListenAndServe("localhost:8080", nil)
}
