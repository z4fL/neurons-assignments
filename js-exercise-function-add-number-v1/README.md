# Add The Number

### Description

Pada _file_ `main.js`, buatlah sebuah `function` yang akan menerima sebuah `parameter` berupa `numStr`, dan `options`.

`Function` tersebut akan mengembalikan nilai berupa kumpulan angka dalam bentuk `string` dari penjumlahan setiap 2 buah angka pada `parameter` `numStr` yang di dapat dengan ketentuan berikut.

- Jika `parameter` `options` bernilai `right` maka setiap angka di jumlahkan dengan angka sebelahnya dimulai dari sisi kanan.
- Jika `parameter` `options` bernilai `left` maka setiap angka di jumlahkan dengan angka sebelahnya dimulai dari sisi kiri.

Berilah nama `function` tersebut dengan `addNumber`.

### Constraints

- Name of the function must be `addNumber`
- Function hanya menerima 2 parameter
- Disumsikan nilai dari `parameter` `options` hanya berupa `right` atau `left` (**dalam huruf kecil**)
- Boleh menggunakan `function declaration` atau `function expression`

### Test Case Examples

#### Test Case 1

**Input**:

```txt
//numStr, options
"012345", "left"
```

**Expected Output / Behavior**:

```txt
"13579"
```

**Explanation**:

```txt
Nilai dari parameter "options" adalah "left", sehingga penjumlahan angka di mulai dari sisi kanan dengan ututan berikut:
0 + 1 = 1
1 + 2 = 3
2 + 3 = 5
3 + 4 = 7
4 + 5 = 9
Setiap hasil penjumlahan dimasukan ke dalam string sehingga menghasilkan kumpulan angka "13579"
```

#### Test Case 2

**Input**:

```txt
//numStr, options
"672318", "right"
```

**Expected Output / Behavior**:

```txt
"945913"
```

**Explanation**:

```txt
Nilai dari parameter "options" adalah "right", sehingga penjumlahan angka di mulai dari sisi kiri dengan ututan berikut:
8 + 1 = 9
1 + 3 = 4
3 + 2 = 5
2 + 7 = 9
7 + 6 = 13
Setiap hasil penjumlahan dimasukan ke dalam string sehingga menghasilkan kumpulan angka "945913"
```
