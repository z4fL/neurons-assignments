# Clock Conversion

### Description

Pada _file_ `main.js`, buatlah sebuah `function` yang akan menerima sebuah `parameter` berupa `hour` (`integer`) dan `params` (`string`).

`Function` tersebut akan mengembalikan nilai berupa `integer` dengan nilai `hour` yang sudah **di konversi menjadi menit atau detik** bergantung pada nilai yang diterma dalam parameter `params`.

Berilah nama `function` tersebut dengan `clockConversion` dan jangan lupa untuk meng-_export_ function tersebut.

### Constraints

- Name of the function must be `clockConversion`
- Function hanya menerima 2 parameter
- Parameter `params` hanya akan memiliki nilai berupa "minutes" atau "seconds"
- Jika nilai dari parameter `hour` dibawah 1 atau minus, maka akan mengembalikan "Hour cannot be under 1"
- Boleh menggunakan `function declaration` atau `function expression`

### Test Case Examples

#### Test Case 1

**Input**:

```txt
//hour, params
-1, minutes
```

**Expected Output / Behavior**:

```txt
Hour cannot be under 1
```

#### Test Case 2

**Input**:

```txt
//hour, params
3, minutes
```

**Expected Output / Behavior**:

```txt
180
```

#### Test Case 3

**Input**:

```txt
//hour, params
1, seconds
```

**Expected Output / Behavior**:

```txt
3600
```
