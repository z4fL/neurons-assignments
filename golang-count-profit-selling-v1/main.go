package main

import "fmt"

func CountProfit(data [][][2]int) []int {

	profits := make([]int, 0)

	for _, cabang := range data {
		totalBulan := len(cabang)

		if totalBulan > len(profits) {
			tambahBulan := make([]int, totalBulan-len(profits))
			profits = append(profits, tambahBulan...)
		}

		for i, bulan := range cabang {
			penjualan := bulan[0]
			pengeluaran := bulan[1]
			keuntungan := penjualan - pengeluaran

			profits[i] += keuntungan
		}
	}

	return profits
}

func main() {
	data1 := [][][2]int{
		{
			{1000, 800},
			{700, 500},
		},
		{
			{1000, 800},
			{900, 200},
		},
	}
	data2 := [][][2]int{
		{
			{1000, 500},
			{500, 150},
			{600, 100},
			{800, 750},
		},
	}
	data3 := [][][2]int{
		{
			{1000, 200},
		},
		{
			{500, 100},
		},
		{
			{600, 100},
		},
		{
			{450, 150},
		},
		{
			{100, 50},
		},
	}
	data4 := [][][2]int{{{1000, 500}, {500, 200}}, {{1200, 200}, {1000, 800}}, {{500, 100}, {700, 100}}}
	fmt.Println(CountProfit(data1))
	fmt.Println()
	fmt.Println(CountProfit(data2))
	fmt.Println()
	fmt.Println(CountProfit(data3))
	fmt.Println()
	fmt.Println(CountProfit(data4))
	fmt.Println()
}
