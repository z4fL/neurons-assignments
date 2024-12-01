package main

import (
	"fmt"
	"strconv"
)

func DeliveryOrder(data []string, day string) map[string]float32 {

	lokasiPengiriman := map[string][]string{
		"JKT": {"senin", "selasa", "rabu", "kamis", "jumat", "sabtu"},
		"BDG": {"rabu", "kamis", "sabtu"},
		"BKS": {"selasa", "kamis", "jumat"},
		"DPK": {"senin", "selasa"},
	}

	biayaAdmin := map[string]float32{
		"senin":  0.10,
		"selasa": 0.05,
		"rabu":   0.10,
		"kamis":  0.05,
		"jumat":  0.10,
		"sabtu":  0.05,
	}

	result := make(map[string]float32)

	for _, v := range data {
		colonCount := 0
		word := ""
		name := ""
		price := 0
		location := ""

		for i := 0; i < len(v); i++ {
			char := string(v[i])
			if char != ":" {
				word += char
			}
			if char == ":" || i == len(v)-1 {
				colonCount++

				if colonCount == 1 {
					name = word + "-"
					word = ""
				} else if colonCount == 2 {
					name += word
					word = ""
				} else if colonCount == 3 {
					price, _ = strconv.Atoi(word)
					word = ""
				}

				if i == len(v)-1 {
					location = word
					word = ""

					if days, exist := lokasiPengiriman[location]; exist {
						for _, value := range days {
							if value == day {
								if biaya, exist := biayaAdmin[day]; exist {
									result[name] = float32(price) + (float32(price) * biaya)
								}
							}
						}
					}
				}

			}
		}
	}

	return result
}

func main() {
	data := []string{
		"Budi:Gunawan:10000:JKT",
		"Andi:Sukirman:20000:JKT",
		"Budi:Sukirman:30000:BDG",
		"Andi:Gunawan:40000:BKS",
		"Budi:Gunawan:50000:DPK",
	}

	day := "sabtu"

	deliveryData := DeliveryOrder(data, day)

	fmt.Println(deliveryData)
}
