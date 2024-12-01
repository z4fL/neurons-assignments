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
	return func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(fmt.Sprintf("%v, %d %v %d", weekDay, day, month, year)))
	}
}

func SayHelloHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		param := r.URL.Query().Get("name")
		result := ""

		if param == "" {
			result = "Hello there"
		} else {
			result = fmt.Sprintf("Hello, %s!", param)

		}

		w.Write([]byte(result))
	}
}

func GetMux() *http.ServeMux {
	mux := http.NewServeMux()
	mux.HandleFunc("/time", TimeHandler())
	mux.HandleFunc("/hello", SayHelloHandler())

	return mux
}

func main() {
	http.ListenAndServe("localhost:8080", GetMux())
}
