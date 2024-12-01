# Minimum and Maximum Number

### Description

Pada _file_ `main.js`, buatlah sebuah `function` yang akan menerima sebuah `parameter` berupa `str`.

Parameter `str` merupakan sebuah `string` berisikan kumpulan sebuah angka. Function ini akan mengembalikan sebuah pesan berisi jumlah angka terbesar dan terkecil dengan ketentuan berikut:

- Jika angka terbesar dan terkecil yang ditemukan sama maka akan mengembalikan pesan `Nilai terkecil dan terbesar adalah <angka>`
- Jika angka terbesar dan terkecil yang ditemukan sama maka akan mengembalikan pesan `Nilai terkecil adalah <angka>, dan terbesar adalah <angka>`


### Constraints

- Name of the function must be `minMax`
- Function hanya menerima 1 parameter
- Boleh menggunakan `function declaration` atau `function expression`

### Test Case Examples

#### Test Case 1

**Input**:

```txt
//str
"9746532"
```

**Expected Output / Behavior**:

```txt
Nilai terkecil adalah 2, dan terbesar adalah 9
```

**Explanation**:

```txt
Jika di perhatikan dari kumpulan angka dalam bentuk string, nilai terkecil yang ditemukan adalah 2, dan terbesar adalah 9.
```

#### Test Case 2

**Input**:

```txt
//str
1
```

**Expected Output / Behavior**:

```txt
Nilai terkecil dan terbesar adalah 1
```

**Explanation**:

```txt
Jika di perhatikan dari kumpulan angka dalam bentuk string, nilai terkecil dan terbesar yang ditemukan sama-sama 1.
```
