# Short Name

### Description

Pada _file_ `main.js`, buatlah sebuah `function` yang akan menerima sebuah `parameter` berupa `name` dan `options`.

Parameter `name` merupakan sebuah `string` berisikan nama user yang terdiri dari 2 kata.
Jika `name` hanya terdiri dari 1 kata, maka akan me-return 'Invalid Name'.

Parameter `options` merupakan sebuah `string` berisikan salah satu kata berikut:

- `first` : maka nama depan disingkat sehingga hanya nama belakang saja yang terlihat
  contoh: Djarot Purnomo -> D. Purnomo

- `last` : maka nama belakang disingkat sehingga hanya nama depan saja yang terlihat
  contoh: Ginanjar Prakoso -> Ginanjar P.

- `full`: maka namanya tidak disingkat
  contoh: Andre Sembiring -> Andre Sembiring

Berilah nama `function` tersebut dengan `shortName`.

### Constraints

- Name of the function must be `shortName`
- Function hanya menerima 2 parameter
- Disumsikan nama user paling banyak terdiri dari 2 kata
- Parameter `options` hanya akan memiliki nilai berupa `first`, `last` dan `full`
- Jika nilai dari parameter `name` tidak terdiri dari 2 kata, maka akan me-return 'Invalid Name'
- Boleh menggunakan `function declaration` atau `function expression`

### Test Case Examples

#### Test Case 1

**Input**:

```txt
//name, options
Anton, first
```

**Expected Output / Behavior**:

```txt
Invalid Name
```

**Explanation**:

```txt
Nilai dari parameter `name` hanya terdiri dari 1 kata, sehingga me-return 'Invalid Name'
```

#### Test Case 2

**Input**:

```txt
//name, options
Djarot Purnomo, first
```

**Expected Output / Behavior**:

```txt
D. Purnomo
```

**Explanation**:

```txt
Nilai dari parameter `options` berupa `first`, sehingga nama depan disingkat dan hanya nama belakang saja yang terlihat.
```

#### Test Case 3

**Input**:

```txt
//name, options
Ginanjar Prakoso, last
```

**Expected Output / Behavior**:

```txt
Ginanjar P.
```

**Explanation**:

```txt
Nilai dari parameter `options` berupa `last`, sehingga nama belakang disingkat dan hanya nama depan saja yang terlihat.
```

#### Test Case 4

**Input**:

```txt
//name, options
Andre Sembiring, full
```

**Expected Output / Behavior**:

```txt
Andre Sembiring
```

**Explanation**:

```txt
Nilai dari parameter `options` berupa `full`, sehingga tidak ada nama yang disingkat dan menampilkan nama lengkap.
```
