# Resistor Value

## NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian `module.exports` dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Description

`Resistor Value` adalah sebuah function yang akan menghitung nilai resistor berdasarkan warna-warna pita yang ada pada
resistor tersebut.

Function ini akan menerima 4 parameter yaitu:

- `bandColor1` bertipe `string` yang merupakan warna pita pertama.
- `bandColor2` bertipe `string` yang merupakan warna pita kedua.
- `bandColor3` bertipe `string` yang merupakan warna pita ketiga.
- `bandColor4` bertipe `string` yang merupakan warna pita keempat.

Kombinasi warna `bandColor1` & `bandColor2` merupakan dasar nilai resistor, atau disebut nilai `significant figure`.

Cara mendapatkan nilai `significant figure` adalah dengan menggabungkan nilai warna pita pertama dan kedua.

Contoh:

```txt
bandColor1: 'black' => 0
bandColor2: 'brown' => 1

significant figure: 01
```

```txt
bandColor1: 'blue' => 6
bandColor2: 'grey' => 8

significant figure: 68
```

```txt
bandColor1: 'orange' => 3
bandColor2: 'white' => 9

significant figure: 39
```

`bandColor3` merupakan nilai pengali, atau disebut `multiplier`.

`bandColor4` merupakan nilai ± toleransi, atau disebut `tolerance`.

---

Berikut adalah tabel warna pita beserta nilai-nilai yang dihasilkan:

| Warna Pita | Significat Figure | Multiplier | Tolerance ± % |
| ---------- | ----------------- | ---------- | ------------- |
| black      | 0                 | 1          | 20            |
| brown      | 1                 | 10         | 1             |
| red        | 2                 | 100        | 2             |
| orange     | 3                 | 1,000      |               |
| yellow     | 4                 | 10,000     |               |
| green      | 5                 | 100,000    |               |
| blue       | 6                 | 1,000,000  |               |
| violet     | 7                 | 10,000,000 |               |
| grey       | 8                 |            |               |
| white      | 9                 |            |               |
| gold       |                   | 0.1        | 5             |
| silver     |                   | 0.01       | 10            |

---

Nilai resistor yang dihasilkan adalah nilai `significant figure` dikali `multiplier`.

## Expected Behavior

Fungction `resistorValue` akan mengembalikan nilai resistor dalam bentuk `string` dengan format:

```txt
{nilai resistor} ohm ±{toleransi}%
```

## Constraints

- `bandColor1`, `bandColor2`, `bandColor3`, dan `bandColor4` berupa `string`.
- `bandColor1`, `bandColor2`, `bandColor3`, dan `bandColor4` memiliki nilai sesuai dengan tabel warna pita diatas.
- `bandColor1` dan `bandColor2` tidak akan pernah bernilai `gold` atau `silver`.
- `bandColor3` tidak akan pernah bernilai `grey` atau `white`.
- `bandColor4` hanya akan bernilai `black`, `brown`, `red`, `gold`, atau `silver`.

## Test Case Examples

### Test Case 1

**Input**:

```txt
bandColor1: 'black'
bandColor2: 'brown'
bandColor3: 'red'
bandColor4: 'gold'
```

**Expected Output / Behavior**:

```txt
100 ohm ±5%
```

**Explanation**:

```txt
bandColor1: 'black' => 0
bandColor2: 'brown' => 1

significant figure: 01

bandColor3: 'red' => 100

multiplier: 100

bandColor4: 'gold' => 5

tolerance: ±5%

nilai resistor: 01 * 100 = 100 ohm

output: 100 ohm ±5%
```

---

### Test Case 2

**Input**:

```txt
bandColor1: 'blue'
bandColor2: 'grey'
bandColor3: 'green'
bandColor4: 'silver'
```

**Expected Output / Behavior**:

```txt
6800000 ohm ±10%
```

**Explanation**:

```txt
bandColor1: 'blue' => 6
bandColor2: 'grey' => 8

significant figure: 68

bandColor3: 'green' => 100,000

multiplier: 100000

bandColor4: 'silver' => 10

tolerance: ±10%

nilai resistor: 68 * 100000 = 6800000 ohm

output: 6800000 ohm ±10%
```

---

### Test Case 3

**Input**:

```txt
bandColor1: 'orange'
bandColor2: 'white'
bandColor3: 'yellow'
bandColor4: 'gold'
```

**Expected Output / Behavior**:

```txt
31000 ohm ±5%
```

**Explanation**:

```txt

bandColor1: 'orange' => 3
bandColor2: 'white' => 9

significant figure: 39

bandColor3: 'yellow' => 10,000

multiplier: 10000

bandColor4: 'gold' => 5

tolerance: ±5%

nilai resistor: 39 * 10000 = 390000 ohm

output: 390000 ohm ±5%
```

---
