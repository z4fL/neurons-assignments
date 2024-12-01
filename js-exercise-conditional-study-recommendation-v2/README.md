# Study Recommendation

## NOTES

- Kerjakan di file `main.js`.
- Kerjakan di antara komentar `//beginanswer` dan `//endanswer`.
- Dilarang mengganti nama `function` yang sudah diberikan.
- Dilarang mengubah isi dari file `main.test.js`.

---

### Description

`Study Recommendation` adalah sebuah `function` yang akan memberikan rekomendasi jurusan yang bisa di ambil oleh seorang siswa sesuai dengan kondisi nilai mata pelajaran.

`Function` ini akan menerima 3 `parameter` yaitu:

- `mathScore` yang merupakan nilai pelajaran matematika.
- `physicsScore` yang merupakan nilai pelajaran fisika.
- `englishScore` yang merupakan nilai pelajaran bahasa inggris.

`Function` ini akan mengembalikan sebuah `string` yang berisi rekomendasi jurusan yang bisa diambil oleh siswa tersebut.

---

Untuk mendapatkan rekomendasi jurusan, **salah satu dari ketiga nilai mata pelajaran** harus memenuhi kriteria berikut:

- `mathScore` minimal 80
- `physicsScore` minimal 75
- `englishScore` minimal 70

Jika **ketiga nilai mata pelajaran tidak memenuhi kriteria di atas**, maka `function` akan mengembalikan `string`:

```text
Maaf, tidak ada rekomendasi yang dapat kami berikan.
```

Jika salah satu nilai mata pelajaran memenuhi kriteria di atas, maka `function` akan mengembalikan `string` yang berisikan rekomendasi jurusan yang bisa diambil oleh siswa tersebut.

---

Berikut adalah kriteria untuk mendapatkan rekomendasi setiap jurusan:

| Jurusan            | Minimal Nilai Matematika | Minimal Nilai Fisika | Minimal Nilai Bahasa Inggris |
| :----------------- | :----------------------- | :------------------- | :--------------------------- |
| Teknik Informatika | 85                       | 85                   | 85                           |
| Teknik             | 80                       | 75                   | -                            |
| Ekonomi            | 80                       | -                    | 70                           |
| Sastra Inggris     | -                        | -                    | 70                           |
| Matematika         | 80                       | -                    | -                            |
| Fisika             | -                        | 75                   | -                            |

- Jurusan `Teknik Informatika`: rekomendasi diberikan jika nilai matematika, fisika, dan bahasa inggris >= 85.
- Jurusan `Teknik`: rekomendasi diberikan jika nilai matematika >= 80 dan nilai fisika >= 75.
- Jurusan `Ekonomi`: rekomendasi diberikan jika nilai matematika >= 80 dan nilai bahasa inggris lebih besar dari 70.
- Jurusan `Sastra Inggris`: rekomendasi diberikan jika nilai bahasa inggris >= 70.
- Jurusan `Matematika`: rekomendasi diberikan jika nilai matematika >= 80.
- Jurusan `Fisika`: rekomendasi diberikan jika nilai fisika >= 75.

---

Format `string` rekomendasi jurusan yang akan dihasilkan adalah sebagai berikut:

- Jika ada rekomendasi jurusan yang bisa diambil, maka `function` akan mengembalikan `string`:

  ```text
  Rekomendasi jurusan yang bisa dipilih: [jurusan1];[jurusan2];[jurusan3];[jurusan4];......[jurusan-N];
  ```

- Urutan jurusan harus sama dengan urutan kriteria di atas.
- Setiap nama jurusan diakhiri dengan tanda `;`.

---

### Constraints

- `mathScore`, `physicsScore`, dan `englishScore` berupa `number`.
- `mathScore`, `physicsScore`, dan `englishScore` >= 0.
- `mathScore`, `physicsScore`, dan `englishScore` <= 100.

---

### Test Case Examples

#### Test Case 1

**Input**:

```txt
mathScore: 90
physicsScore: 90
englishScore: 90
```

**Expected Output / Behavior**:

```txt
Rekomendasi jurusan yang bisa dipilih: Teknik Informatika;Teknik;Ekonomi;Sastra Inggris;Matematika;Fisika;
```

**Explanation**:

```txt
Karena nilai matematika, fisika, dan bahasa inggris >= 85, maka siswa tersebut bisa mengambil jurusan Teknik Informatika, Teknik, Ekonomi, Sastra Inggris, Matematika, dan Fisika.
```

---

#### Test Case 2

**Input**:

```txt
mathScore: 0
physicsScore: 0
englishScore: 0
```

**Expected Output / Behavior**:

```txt
Maaf, tidak ada rekomendasi yang dapat kami berikan.
```

**Explanation**:

```txt
Karena nilai matematika, fisika, dan bahasa inggris lebih kecil dari 80, maka siswa tersebut tidak bisa mengambil jurusan apapun.
```

---

#### Test Case 3

**Input**:

```txt
mathScore: 90
physicsScore: 90
englishScore: 0
```

**Expected Output / Behavior**:

```txt
Rekomendasi jurusan yang bisa dipilih: Teknik;Matematika;Fisika;
```

**Explanation**:

```txt
Karena nilai matematika dan fisika >= 80, dan nilai bahasa inggris lebih kecil dari 70, maka siswa tersebut bisa mengambil jurusan Teknik, Matematika, dan Fisika.
```

---
