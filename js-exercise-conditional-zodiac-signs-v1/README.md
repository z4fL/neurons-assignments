# Zodiak Signs

## NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian `module.exports` dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Description

`Zodiak Signs` adalah sebuah function yang akan menentukan zodiak seseorang berdasarkan tanggal dan bulan kelahirannya.
Function ini akan menerima dua parameter yaitu:

- `date` bertipe `number` yang merupakan tanggal kelahiran seseorang.
- `month` bertipe `string` yang merupakan bulan kelahiran seseorang.

Format Data yang diterima oleh function seperti berikut:

- Untuk bulan `Januari`, `Maret`, `Mei`, `Juli`, `Agustus`, `Oktober`, dan `Desember` maka `date` yang diterima adalah
  `1` sampai `31`.
- Untuk bulan `April`, `Juni`, `September`, dan `November` maka `date` yang diterima adalah `1` sampai `30`.
- Untuk bulan `Februari` maka `date` yang diterima adalah `1` sampai `29`.

Berikut adalah tabel zodiak beserta tanggal dan bulan kelahirannya:

| Zodiak      | Tanggal                   |
| ----------- | ------------------------- |
| Capricorn   | 22 Desember - 19 Januari  |
| Aquarius    | 20 Januari - 18 Februari  |
| Pisces      | 19 Februari - 20 Maret    |
| Aries       | 21 Maret - 19 April       |
| Taurus      | 20 April - 20 Mei         |
| Gemini      | 21 Mei - 20 Juni          |
| Cancer      | 21 Juni - 22 Juli         |
| Leo         | 23 Juli - 22 Agustus      |
| Virgo       | 23 Agustus - 22 September |
| Libra       | 23 September - 22 Oktober |
| Scorpio     | 23 Oktober - 21 November  |
| Sagittarius | 22 November - 21 Desember |

## Expected Output / Behavior

Function akan mengembalikan `string` yang berisi zodiak dari seseorang.

Jika `date` dan `month` tidak sesuai dengan format yang diberikan, maka function akan mengembalikan string:

- `date` tidak sesuai format yang diberikan, maka function akan mengembalikan string: `Input tanggal salah`.
- `month` tidak sesuai format yang diberikan, maka function akan mengembalikan string: `Input bulan salah`.

## Constraints

- `date` berupa `number`.
- `month` berupa `string`.
- `date` dan `month` tidak kosong.

## Test Case Examples

### Test Case 1

**Input**:

```txt
date: 22
month: Desember
```

**Expected Output / Behavior**:

```txt
Capricorn
```

**Explanation**:

```txt
22 Desember adalah tanggal kelahiran Capricorn
```

---

### Test Case 2

**Input**:

```txt
date: 21
month: Maret
```

**Expected Output / Behavior**:

```txt
Aries
```

**Explanation**:

```txt
21 Maret adalah tanggal kelahiran Aries
```

---

### Test Case 3

**Input**:

```txt
date: 20
month: Mei
```

**Expected Output / Behavior**:

```txt
Taurus
```

**Explanation**:

```txt
20 Mei adalah tanggal kelahiran Taurus
```

---

### Test Case 4

**Input**:

```txt
date: 39
month: Mei
```

**Expected Output / Behavior**:

```txt
Input tanggal salah
```

**Explanation**:

```txt
39 Mei adalah tanggal kelahiran yang tidak valid
```

---

### Test Case 5

**Input**:

```txt
date: 20
month: May
```

**Expected Output / Behavior**:

```txt
Input bulan salah
```

**Explanation**:

```txt
20 May adalah bulan kelahiran yang tidak valid, Karena bulan May tidak ada di dalam format bulan yang diberikan
```

---

> **Clue:** Untuk mempermudah pengerjaan, kombinasikan `switch case` dan `if else` untuk menyelesaikan soal ini.
