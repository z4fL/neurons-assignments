package main

import (
	"fmt"
	"os"
	"sort"
)

type Transaction struct {
	Date   string
	Type   string
	Amount int
}

func RecordTransactions(path string, transactions []Transaction) error {
	transactionMap := make(map[string]int)

	for _, t := range transactions {
		if t.Type == "income" {
			transactionMap[t.Date] += t.Amount
		} else if t.Type == "expense" {
			transactionMap[t.Date] -= t.Amount
		}
	}

	var dates []string
	for key := range transactionMap {
		dates = append(dates, key)
	}
	sort.Strings(dates)

	file, err := os.Create(path)
	if err != nil {
		return err
	}
	defer file.Close()

	for index, date := range dates {
		amount := transactionMap[date]
		typeOf := "income"
		if amount < 0 {
			typeOf = "expense"
			amount = -amount
		}

		data := fmt.Sprintf("%s;%s;%d", date, typeOf, amount)
		if index != 0 || (index == len(dates)-1 && len(dates) > 1) {
			file.WriteString("\n")
		}

		file.WriteString(data)
	}

	return nil
}

func main() {
	// bisa digunakan untuk pengujian test case
	var transactions = []Transaction{
		{"01/01/2021", "income", 100000},
		{"01/01/2021", "expense", 50000},
		{"01/01/2021", "expense", 30000},
		{"01/01/2021", "income", 20000},
		{"02/01/2021", "expense", 10000},
		{"02/01/2021", "expense", 10000},
	}

	err := RecordTransactions("transactions.txt", transactions)
	if err != nil {
		panic(err)
	}

	fmt.Println("Success")
}
