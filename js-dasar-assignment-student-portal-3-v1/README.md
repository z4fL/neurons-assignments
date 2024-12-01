# Student Portal - Student Data

## Assignment

### Description

Pada _assignment_ kali ini kalian diminta untuk membuat program untuk melihat data _student_ berdasarkan nama dan id student yang dimiliki.

Pada _assignment_ ini, kalian di berikan beberapa _function_ dengan penamaan sesuai dengan kegunaannya, antara lain:

1. `studentData` : _function_ utama yang akan memanggil _function_ lainnya.
2. `getLecturer` : _function_ yang dapat kalian gunakan untuk mendapatkan data dosen pembimbing.

Terdapat juga function `process_argv` yang akan menerima _input_ yang kalian masukan pada terminal.

> Kalian tidak perlu mengubah atau mengerjakan apa pun pada function `process_argv`

Berikut ini format input pada terminal yang wajib kalian ikuti untuk menjalankan program yang dibuat:

```txt
node main.js "name" "studentId"
```

contoh

```bash
node main.js "Djarot Purnomo" "2018870038"
```

### `studentData`

_Function_ `studentPortal` menerima 2 buah parameter berupa `name` dan `studentId` dimana _value_ dari parameter tersebut berbentuk `string`.

| Name        | Data Type |
| ----------- | --------- |
| _name_      | string    |
| _studentId_ | string    |

Pada _function_ ini terdapat _data_ dalam _variable_ `facultyList` (bertipe _data_ `multidimentional array`) yang mana setiap elemen dari `array` berisikan nama fakultas dan program studi yang terdaftar.

| Name            | Data Type | Index |
| --------------- | --------- | ----- |
| _faculty_       | string    | 0     |
| _study program_ | string    | 1     |

```js
const facultyList = [
    ["Fakultas Ekonomi", "Ekonomi"],
    ["Fakultas Ekonomi", "Manajemen"],
    ["Fakultas Ekonomi", "Akuntansi"],
    ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik"],
    ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis"],
    ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional"],
    ["Fakultas Teknik", "Teknik Sipil"],
    ["Fakultas Teknik", "Arsitektur"],
    ["Fakultas Teknologi Informasi dan Sains", "Matematika"],
    ["Fakultas Teknologi Informasi dan Sains", "Fisika"],
    ["Fakultas Teknologi Informasi dan Sains", "Informatika"],
];
```

_Function_ ini akan memproses _input_ yang diterima dari terminal dengan ketentuan dibawah ini.

1. `studentId` memiliki format sebagai berikut:

    ```txt
    2022310004 -> 2022 31 0004
    ```

    - 2022 = tahun student terdaftar
    - 31 = kode program studi
    - 0004 = nomor urut student

2. Diasumsikan terdapat beberapa kode program studi yang dimiliki.

    - `21` = Untuk program studi `Ekonomi`
    - `22` = Untuk program studi `Manajemen`
    - `23` = Untuk program studi `Akuntansi`
    - `31` = Untuk program studi `Administrasi Publik`
    - `32` = Untuk program studi `Administrasi Bisnis`
    - `33` = Untuk program studi `Hubungan Internasional`
    - `41` = Untuk program studi `Teknik Sipil`
    - `42` = Untuk program studi `Arsitektur`
    - `51` = Untuk program studi `Matematika`
    - `52` = Untuk program studi `Fisika`
    - `53` = Untuk program studi `Informatika`

Kalian diminta untuk melakukan beberapa hal, antara lain:

1. Mendapatkan nama fakultas dan program studi berdasarkan kode program studi yang didapat dari parameter `studentId`.

2. Jika pada parameter `studentId` terdapat kode program studi yang tidak terdaftar maka akan menampilkan pesan error `Invalid Student's ID`.

3. Mendapatkan nama dari dosen pembimbing berdasarkan nama program studi yang sudah didapatkan.

    > Hints: Gunakanlah function getLecturer untuk mendapatkan nama dari dosen pembimbing.

Output dari function ini berupa `object` dengan data _student_ yang sudah dilengkap dengan nama fakultas, program studi dan nama dosen pembimbing dengan format berikut:

```txt
{
    id: <id student>,
    name: <nama student>,
    prody: <nama program studi>,
    faculty: <nama fakultas>,
    thesisLecturer: <nama dosen pembimbing>,
}
```

#### Test Case 1

**Input**:

```js
//studentData(name, studentId)
studentData("Djarot Purnomo", "2018870038");
```

**Expected Output / Behavior**:

```txt
Invalid Student's ID
```

#### Test Case 2

**Input**:

```js
//studentData(name, studentId)
studentData("Anshori Atmodiredjo", "2014530049");
```

**Expected Output / Behavior**:

```js
{
    id: "2014530049",
    name: "Anshori Atmodiredjo",
    prody: "Informatika",
    faculty: "Fakultas Teknologi Informasi dan Sains",
    thesisLecturer: "Dott. Thomas Anung Basuki, ST., MKom.",
}
```

### `getLecturer`

_Function_ `studentPortal` menerima sebuah parameter berupa `prody` dimana _value_ dari parameter tersebut berbentuk `string`.

Pada _function_ ini terdapat _data_ dalam _variable_ `lecturerList` (bertipe _data_ `multidimentional array`) yang mana setiap elemen dari `array` berisikan nama dosen pembimbing dan program studi tempat dosen tersebut mengajar.

| Name                   | Data Type | Index |
| ---------------------- | --------- | ----- |
| _thesis lecturer name_ | string    | 0     |
| _study program_        | string    | 1     |

```js
const lecturerList = [
    ["Dr. Ulbert Silalahi, Drs., MA.", "Administrasi Publik"],
    ["Prof. Dr. Martinus Yuwana Marjuka, M.Si.", "Ekonomi"],
    ["Dott. Thomas Anung Basuki, ST., MKom.", "Informatika"],
    ["Dr. Cecilia Lauw Giok Swan, Ir., M.T.", "Teknik Sipil"],
    ["Catharina Tan Lian Soei,Dra.,MM.", "Manajemen"],
    ["Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.", "Arsitektur"],
    ["Sapta Dwikardana, Drs., M.Si., Ph.D.", "Hubungan Internasional"],
    ["Agus, S.Sos., BAC., MBA., M.Phil", "Administrasi Bisnis"],
    ["Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.", "Matematika"],
    ["Liem Chin, SSi., MSi.", "Fisika"],
    ["Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.", "Akuntansi"],
];
```

Kalian diminta untuk mendapatkan nama dosen pembimbing berdasarkan program studi yang didapat dari parameter `prody`. Output dari function ini berupa `string` dari nama dosen pembimbing.

#### Test Case 1

**Input**:

```js
//getLecturer(prody)
getLecturer("Administrasi Publik");
```

**Expected Output / Behavior**:

```txt
Dr. Ulbert Silalahi, Drs., MA.
```

#### Test Case 2

**Input**:

```js
//getLecturer(prody)
getLecturer("Fisika");
```

**Expected Output / Behavior**:

```txt
Liem Chin, SSi., MSi.
```
