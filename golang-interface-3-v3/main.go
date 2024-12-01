package main

import (
	"fmt"
	"strconv"
	"strings"
)

type Time struct {
	Hour   int
	Minute int
}

func ChangeToStandartTime(time any) string {
	var (
		hour   int
		minute int
		result string
		amPm   string = "AM"
	)

	switch time := time.(type) {
	case string:
		if !strings.Contains(time, ":") {
			return "Invalid input"
		}

		colon := strings.Split(time, ":")
		if colon[0] == "" {
			return "Invalid input"
		}
		if colon[1] == "" {
			return "Invalid input"
		}
		hour, _ = strconv.Atoi(colon[0])
		minute, _ = strconv.Atoi(colon[1])

	case []int:
		if len(time) != 2 {
			return "Invalid input"
		}
		hour = time[0]
		minute = time[1]

	case map[string]int:
		if len(time) != 2 {
			return "Invalid input"
		}

		for key := range time {
			if key != "hour" && key != "minute" {
				return "Invalid input"
			}
		}

		hour = time["hour"]
		minute = time["minute"]

	case Time:
		hour = time.Hour
		minute = time.Minute

	default:
		return "Invalid input"
	}

	if hour >= 12 {
		amPm = "PM"
	}
	if hour > 12 {
		hour -= 12
	}

	result = fmt.Sprintf("%d:%d %s", hour, minute, amPm)

	if minute < 10 && hour < 10 {
		result = fmt.Sprintf("0%d:0%d %s", hour, minute, amPm)
	} else if hour < 10 {
		result = fmt.Sprintf("0%d:%d %s", hour, minute, amPm)
	} else if minute < 10 {
		result = fmt.Sprintf("%d:0%d %s", hour, minute, amPm)
	}

	return result
}

func main() {
	fmt.Println(ChangeToStandartTime("14:00"))
	fmt.Println(ChangeToStandartTime([]int{16, 0}))
	fmt.Println(ChangeToStandartTime(map[string]int{"hour": 16, "minute": 0}))
	fmt.Println(ChangeToStandartTime(Time{16, 0}))
}
