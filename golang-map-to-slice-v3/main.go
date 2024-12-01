package main

import "fmt"

func MapToSlice(mapData map[string]string) [][]string {

	result := make([][]string, 0)

	if len(mapData) == 0 {
		return result
	}

	for key, value := range mapData {
		data := []string{key, value}
		result = append(result, data)
	}

	return result
}

func main() {
	mapData := map[string]string{"foo": "33", "bar": "44", "baz": "55"}
	fmt.Println(MapToSlice(mapData))
}
