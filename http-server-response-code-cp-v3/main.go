package main

import (
	"net/http"
)

var students = []string{
	"Aditira",
	"Dito",
	"Afis",
	"Eddy",
}

func IsNameExists(name string) bool {
	for _, n := range students {
		if n == name {
			return true
		}
	}

	return false
}

func CheckStudentName() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		urlParam := r.URL.Query().Get("name")

		switch r.Method {
		case "GET":
			if urlParam == "" || !IsNameExists(urlParam) {
				w.WriteHeader(http.StatusNotFound)
				w.Write([]byte("Data not found"))
			} else if IsNameExists(urlParam) {
				w.WriteHeader(http.StatusOK)
				w.Write([]byte("Name is exists"))
			}
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
			w.Write([]byte("Method is not allowed"))
		}
	}
}

func GetMux() *http.ServeMux {
	mux := http.NewServeMux()

	mux.HandleFunc("/students", CheckStudentName())
	return mux
}

func main() {
	http.ListenAndServe("localhost:8080", GetMux())
}
