# Mineral Mining

## NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian module.exports dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Directions

Diberikan sebuah function `mineralMining`, sebuah function yang mensimulasikan perhitungan pendapatan dari sebuah tambang mineral.

Function ini yang akan menerima 4 parameter dengan detail sebagai berikut:

- Parameter pertama bertipe data `string`, merupakan nama mineral yang di mining.
- Parameter kedua bertipe data `number`, merupakan nilai dari miningPower dari tambang mineral.
- Parameter ketiga bertipe data `number`, merupakan durasi operasional tambang mineral dalam satuan jam.
- Parameter keempat bertipe data `number`, merupakan biaya yang dikeluarkan untuk mining.

Setiap mineral akan mempunyai karakteristik tersendiri, dengan detail sebagai berikut :

| Mineral  | Time to Get | Market Price |
| -------- | :---------: | -----------: |
| gold     |     30      |            1 |
| silver   |     20      |          0.6 |
| coper    |      5      |          0.3 |
| uranium  |     75      |            3 |
| platinum |     15      |            2 |
| titanium |     55      |          1.5 |

Income yang didapat dari sebuah tambang mineral didapat dengan perhitungan seperti berikut:

```bash
(durasi operasional tambang mineral / Time to Get) * miningPower
```

Total income dari tambang mineral didapat dengan perhitungan seperti berikut:

```bash
Total Income yang didapat * Market Price
```

Function `mineralMining` akan mengembalikan sebuah string analisa pendapatan tambang mineral dengan ketentuan sebagai berikut:

- Jika biaya yang dikeluarkan untuk mining > total income dari tambang mineral maka akan mengembalikan string dengan format:

  ```bash
    Mineral mining at a loss + TOTAL KERUGIAN
  ```

- Jika biaya yang dikeluarkan untuk mining < total income dari tambang mineral maka akan mengembalikan string dengan format:

  ```bash
    Mineral mining profit + TOTAL KEUNTUNGAN
  ```

- Jika biaya yang dikeluarkan untuk mining = total income dari tambang mineral maka akan mengembalikan string dengan format:

  ```bash
    Mineral mining get nothing
  ```

## Contoh

```bash
Mineral Name = gold
Mining Power = 10
Duration = 70
Cost = 59
Result = Mineral mining at a loss -35.666666666666664
```

```bash
Mineral Name = rock
Mining Power = 10
Duration = 70
Cost = 40
Result = Invalid mineral name
```

```bash
Mineral Name = uranium
Mining Power = 10
Duration = 70
Cost = 150
Result = Mineral mining at a loss -122
```

```bash
Mineral Name = silver
Mining Power = 33
Duration = 200
Cost = 30
Result = Mineral mining profit 168
```
