# Profit Monitor

## NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian `module.exports` dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

### Description

`profitMonitor()` adalalah sebuh function sederhana yang akan memantau pertumbuhan profit dari suatu usaha.

Function ini akan menerima 2 parameter yaitu:

- `todayProfit`: profit hari ini
- `lastProfit`: profit kemarin

Function akan mengembalikan sebuah string yang berisi:

- `Profit naik sebanyak x point`, jika profit hari ini lebih besar dari profit kemarin
- `Profit turun sebanyak x point`, jika profit hari ini lebih kecil dari profit kemarin
- `Profit stabil`, jika profit hari ini sama dengan profit kemarin

---

### [Optional] Constraints

- `todayProfit` dan `lastProfit` adalah angka bulat positif
- `todayProfit` dan `lastProfit` tidak boleh sama dengan 0

---

### Test Case Examples

#### Test Case 1

**Input**:

```txt
todayProfit: 100
lastProfit: 50
```

**Expected Output / Behavior**:

```txt
Profit naik sebanyak 50 point
```

**Explanation**:

```txt
Nilai profit hari ini lebih besar dari kemarin. Nilai kenaikan profit adalah 50 point (100 - 50).
Sehingga output yang diharapkan adalah "Profit naik sebanyak 50 point".
```

---

#### Test Case 2

**Input**:

```txt
todayProfit: 50
lastProfit: 100
```

**Expected Output / Behavior**:

```txt
Profit turun sebanyak 50 point
```

**Explanation**:

```txt
Nilai profit hari ini lebih kecil dari kemarin. Nilai penurunan profit adalah 50 point (50 - 100).
Sehingga output yang diharapkan adalah "Profit turun sebanyak 50 point".
```

---

#### Test Case 3

**Input**:

```txt
todayProfit: 50
lastProfit: 50
```

**Expected Output / Behavior**:

```txt
Profit stabil
```

**Explanation**:

```txt
Nilai profit hari ini sama dengan kemarin. Sehingga output yang diharapkan adalah "Profit stabil".
```

---
