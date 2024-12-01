package main

import (
	"strconv"
	"strings"
)

func PopulationData(data []string) []map[string]any {
	results := make([]map[string]any, 0)

	for _, value := range data {
		result := map[string]any{}

		word := strings.Split(value, ";")
		name := word[0]
		age, _ := strconv.Atoi(word[1])
		address := word[2]
		height, _ := strconv.ParseFloat(word[3], 64)
		is_married, _ := strconv.ParseBool(word[4])

		result["name"] = name
		result["age"] = age
		result["address"] = address
		if word[3] != "" {
			result["height"] = height
		}
		if word[4] != "" {
			result["isMarried"] = is_married
		}
		results = append(results, result)
	}

	return results
}
