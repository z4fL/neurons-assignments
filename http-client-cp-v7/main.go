package main

import (
	"bytes"
	"crypto/tls"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type Quotes struct {
	Tags   []string `json:"tags"`
	Author string   `json:"author"`
	Quote  string   `json:"content"`
}

func ClientGet() ([]Quotes, error) {
	client := http.Client{Transport: &http.Transport{TLSClientConfig: &tls.Config{InsecureSkipVerify: true}}}

	// Hit API https://api.quotable.io/quotes/random?limit=3 with method GET:
	url := "https://api.quotable.io/quotes/random?limit=3"
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		panic(err)
	}

	res, err := client.Do(req)
	if err != nil {
		panic(err)
	}

	responseData, err := io.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}

	var quotes []Quotes
	err = json.Unmarshal(responseData, &quotes)
	if err != nil {
		panic(err)
	}
	return quotes, nil
}

type data struct {
	Email string `json:"email"`
	Name  string `json:"name"`
}

type Postman struct {
	Data data
	Url  string `json:"url"`
}

func ClientPost() (Postman, error) {
	postBody, _ := json.Marshal(map[string]string{
		"name":  "Dion",
		"email": "dionbe2022@gmail.com",
	})
	requestBody := bytes.NewBuffer(postBody)
	// Hit API https://postman-echo.com/post with method POST:

	resp, err := http.Post("https://postman-echo.com/post", "application/json", requestBody)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	var postman Postman
	err = json.Unmarshal(body, &postman)
	if err != nil {
		panic(err)
	}

	fmt.Println(string(body))

	return postman, nil
}

func main() {
	// get, _ := ClientGet()
	// fmt.Println(get)

	post, _ := ClientPost()
	fmt.Println(post)
}
