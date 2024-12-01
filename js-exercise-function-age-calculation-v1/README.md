# Age Calculation

### Description

Pada _file_ `main.js`, buatlah sebuah `function` yang akan menerima sebuah `parameter` berupa `age` (`number`) dan `params` (`string`).

`Function` tersebut akan mengembalikan nilai berupa `number` dengan nilai `age` yang sudah **di konversi menjadi hari atau bulan** bergantung pada nilai yang diterma dalam parameter `params`.

Berilah nama `function` tersebut dengan `calcAge`.

### Constraints

- Name of the function must be `calcAge`
- Function hanya menerima 2 parameter
- Parameter `params` hanya akan memiliki nilai berupa "**months**" atau "**days**" (**menggunakan huruf kecil**).
- Jika nilai dari parameter `age` dibawah 1 atau minus, maka akan mengembalikan "Age cannot be under 1 year"
- Diasumsikan jumlah hari dalam 1 tahun sebanyak 365 hari
- Boleh menggunakan `function declaration` atau `function expression`

### Test Case Examples

#### Test Case 1

**Input**:

```txt
//age, params
-1, months
```

**Expected Output / Behavior**:

```txt
Age cannot be under 1 year
```

**Explanation**:

```txt
Nilai dari parameter `age` di bawah '1', sehingga me-return 'Age cannot be under 1 year'
```

#### Test Case 2

**Input**:

```txt
//age, params
3, months
```

**Expected Output / Behavior**:

```txt
36
```

**Explanation**:

```txt
Nilai dari parameter `age` adalah '3' dan dalam 1 tahun terdapat 12 bulan, sehingga 3 tahun x 12 bulan hasilnya adalah '36'.
```

#### Test Case 3

**Input**:

```txt
//age, params
1, days
```

**Expected Output / Behavior**:

```txt
365
```

**Explanation**:

```txt
Nilai dari parameter `age` adalah '1' dan dalam 1 tahun terdapat 365 hari, sehingga 1 tahun x 365 hari hasilnya adalah '365'.
```