# Student Portal - Student Status

## Assignment

### Description

Pada _assignment_ kali ini kalian diminta untuk membuat program untuk melihat status _student_. _Output_ dari programm ini berupa sebuah pesan yang berisi info status pada fakultas dan jurusan serta sejak tahun berapa student terdaftar dengan template pesan sebagai berikut:

```txt
Mahasiswa a.n <nama> terdaftar sebagai mahasiswa Program Studi <nama prodi> pada <nama fakultas> sejak tahun <tahun terdaftar>.
```

Disediakan sebuah _function_ `studentStatus` yang menerima `name` dan `studentId`.

| Name        | Data Type |
| ----------- | --------- |
| _name_      | string    |
| _studentId_ | string    |

_Function_ ini akan memproses _input_ yang diterima dari terminal dengan ketentuan dibawah ini.

1. `studentId` memiliki format sebagai berikut:

    ```txt
    FE2022310004 -> FE 2022 31 0004
    ```

    - FE = kode fakultas
    - 2022 = tahun student terdaftar
    - 31 = kode program studi
    - 0004 = nomor urut student

2. Diasumsikan terdapat beberapa kode fakultas yang dimiliki.

    - `FE` = Untuk `Fakultas Ekonomi`
    - `FISIP` = Untuk `Fakultas Ilmu Sosial dan Politik`
    - `FT` = Untuk `Fakultas Teknik`
    - `FTIS` = Untuk `Fakultas Teknologi Informasi dan Sains`

3. Diasumsikan terdapat beberapa kode program studi yang dimiliki.

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

Terdapat juga function `process_argv` yang akan menerima _input_ yang kalian masukan pada terminal.

> Kalian tidak perlu mengubah atau mengerjakan apa pun pada function `process_argv`

Berikut ini format input pada terminal yang wajib kalian ikuti untuk menjalankan program yang dibuat:

```txt
node main.js "name" "studentId"
```

contoh

```bash
node main.js "Anton Bagaskara" "FE2000210002"
```

### Test Case Examples

#### Test Case 1

**Input**:

```js
// studentStatus(name, studentId)
studentStatus("Djarot Purnomo", "FISIP2011320091");
```

**Expected Output / Behavior**:

```txt
Mahasiswa a.n Djarot Purnomo terdaftar sebagai mahasiswa Program Studi Administrasi Bisnis pada Fakultas Ilmu Sosial dan Politik sejak tahun 2011.
```

**Explanation**:

```txt
Student memiliki nama Djarot Purnomo
Kode fakultas yang dimiliki FISIP, sehingga student terdaftar pada Fakultas Ilmu Sosial dan Politik
Tahun student terdaftar 2011
Kode program studi yang dimiliki 32, sehingga student terdaftar pada program studi Administrasi Bisnis
```

#### Test Case 2

**Input**:

```js
// studentStatus(name, studentId)
studentStatus("Anshori Atmodiredjo", "FE2013220100");
```

**Expected Output / Behavior**:

```txt
Mahasiswa a.n Anshori Atmodiredjo terdaftar sebagai mahasiswa Program Studi Manajemen pada Fakultas Ekonomi sejak tahun 2013.
```

**Explanation**:

```txt
Student memiliki nama Anshori Atmodiredjo
Kode fakultas yang dimiliki FE, sehingga student terdaftar pada Fakultas Ekonomi
Tahun student terdaftar 2013
Kode program studi yang dimiliki 22, sehingga student terdaftar pada program studi Manajemen
```
