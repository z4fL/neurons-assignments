package main

import (
	"fmt"
	"strconv"
)

func DateFormat(day, month, year int) string {
	var date, strDay, strMonth, strYear string

	if day < 10 {
		strDay = "0" + strconv.Itoa(day)
	} else {
		strDay = strconv.Itoa(day)
	}

	switch month {
	case 12:
		strMonth = "December"
	case 11:
		strMonth = "November"
	case 10:
		strMonth = "October"
	case 9:
		strMonth = "September"
	case 8:
		strMonth = "August"
	case 7:
		strMonth = "July"
	case 6:
		strMonth = "June"
	case 5:
		strMonth = "May"
	case 4:
		strMonth = "April"
	case 3:
		strMonth = "March"
	case 2:
		strMonth = "February"
	case 1:
		strMonth = "January"
	}

	strYear = strconv.Itoa(year)

	date = strDay + "-" + strMonth + "-" + strYear

	return date
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(DateFormat(1, 1, 2012))
}
