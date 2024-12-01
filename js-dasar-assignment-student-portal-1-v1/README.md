# Student Portal - KRS Application

## Assignment

### Description

Pada _assignment_ kali ini kalian diminta untuk membuat program untuk menentukan jumlah SKS yang dapat diambil setiap _student_. _Output_ dari programm ini berupa sebuah pesan yang berisi info jumlah SKS yang dapat di ambil oleh setiap _student_.

Disediakan sebuah _function_ `krsApplication` yang menerima `name`, `programId` dan `gpa`.

| Name        | Data Type |
| ----------- | --------- |
| _name_      | string    |
| _programId_ | string    |
| _gpa_       | string    |

_Function_ ini akan memproses _input_ yang diterima dari terminal dengan ketentuan dibawah ini.

1. Diasumsikan terdapat beberapa program ID yang dimiliki.

    - `ACC` = Untuk program studi `Akuntansi`
    - `HIN` = Untuk program studi `Hubungan Internasional`
    - `IAB` = Untuk program studi `Ilmu Administrasi Bisnis`
    - `IAP` = Untuk program studi `Ilmu Administrasi Publik`
    - `MJN` = Untuk program studi `Manajemen`
    - `TKM` = Untuk program studi `Teknik Kimia`

2. Setiap GPA/IP yang di miliki oleh _student_ menentukan jumlah SKS yang dapat diambil di semester selanjutnya

    - Jika GPA > 2.99 dapat mengambil 24 SKS
    - Jika GPA 2.5 - 2.99 dapat mengambil 21 SKS
    - Jika GPA 2 - 2.49 dapat mengambil 18 SKS
    - Jika GPA 1.5 - 1.99 dapat mengambil 15 SKS
    - Jika GPA 0 - 1.49 dapat mengambil 12 SKS

3. Jika GPA/IP yang di miliki _student_ dibawah 3, maka _student_ wajib melakukan bimbingan dengan dosen sesuai prodi yang di dapatkan dari `programId`

4. Jika nilai GPA/IP lebih dari 4 atau dibawah 0 maka akan mengembalikan pesan `Invalid gpa number`

5. Terdapat 2 jenis pesan _output_ yang perlu kalian buat.

    - Jika _student_ memiliki GPA/IP lebih dari/sama dengan 3:
      ```txt
      Hallo <nama>, berdasarkan IP semester lalu sebesar <gpa>, kamu dapat mengambil SKS sebanyak <total sks> SKS untuk semester depan.
      ```
    - Jika _student_ memiliki GPA/IP kurang dari 3:
      ```txt
      Hallo <nama>, berdasarkan IP semester lalu sebesar <gpa>, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi <nama prodi> dan hanya dapat mengambil SKS sebanyak <total sks> SKS untuk semester depan.
      ```

Terdapat juga function `process_argv` yang akan menerima _input_ yang kalian masukan pada terminal.

> Kalian tidak perlu mengubah atau mengerjakan apa pun pada function `process_argv`

Berikut ini format input pada terminal yang wajib kalian ikuti untuk menjalankan program yang dibuat:

```txt
node main.js "name" "programId" "gpa"
```

contoh

```bash
node main.js "Anton Bagaskara" "IAB" "3"
```

### Test Case Examples

#### Test Case 1

**Input**:

```js
// krsApplication(name, programId, gpa)
krsApplication("Joel", "IAB", "3")
```

**Expected Output / Behavior**:

```txt
Hallo Joel, berdasarkan IP semester lalu sebesar 3, kamu dapat mengambil SKS sebanyak 24 SKS untuk semester depan.
```

**Explanation**:

```txt
Joel memiliki GPA sebesar 3.
studentId yang dimiliki adalah IAB dengan begitu program studi yang diambil Joel adalah Ilmu Administrasi Bisnis.
Karena GPA yang dimiliki Joel 3, maka Joel dapat mengambil SKS sebanyak 24 SKS.
```

#### Test Case 2

**Input**:

```js
// krsApplication(name, programId, gpa)
krsApplication("Ellie", "HIN", "2.2")
```

**Expected Output / Behavior**:

```txt
Hallo Ellie, berdasarkan IP semester lalu sebesar 2.2, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi Hubungan Internasional dan hanya dapat mengambil SKS sebanyak 18 SKS untuk semester depan.
```

**Explanation**:

```txt
Ellie memiliki GPA sebesar 2.2.
studentId yang dimiliki adalah HIN dengan begitu program studi yang diambil Ellie adalah Hubungan Internasional.
Karena GPA yang dimiliki Ellie 2.2, maka Ellie dapat mengambil SKS sebanyak 18 SKS dan wajib melakukan bimbingan.
```

#### Test Case 3

**Input**:

```js
// krsApplication(name, programId, gpa)
krsApplication("Tommy", "ACC", "4.1")
```

**Expected Output / Behavior**:

```txt
Invalid gpa number
```

**Explanation**:

```txt
Tommy memiliki GPA sebesar 4.1 sehingga output yang didapatkan 'Invalid gpa number'.
```