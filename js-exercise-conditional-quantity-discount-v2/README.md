# Quantity Discount

## NOTES

- Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
- Dilarang menghapus ataupun mengedit bagian `module.exports` dibagian bawah file `main.js`
- Dilarang mengganti nama function yang diberikan

---

## Description

`quantityDiscount` adalah sebuah `Function` yang menerima dua parameter, yaitu `quantity` dan `price`.

`Function` ini akan mengembalikan nilai total yang harus dibayarkan oleh customer berdasarkan perhitungan dari `quantity`, `price`, `diskon`, dan `pajak`.

- Jika `quantity` pembelian lebih dari atau sama dengan 5, maka mendapatkan diskon sebesar 15% dari total harga barang.
- Jika `quantity` pembelian lebih dari atau sama dengan 10, maka mendapatkan diskon sebesar 20% dari total harga barang.
- Pajak pembelian adalah 11% dari total harga barang setelah diskon.

Nilai yang di-_return_ dalam bentuk number.

## Constraints

- `quantity` dan `price` adalah bilangan bulat positif.
- `quantity` dan `price` tidak boleh bernilai `0`.

## Test Case Examples

### Test Case 1

**Input**:

```txt
quantity: 3
price: 10000
```

**Expected Output / Behavior**:

```txt
33330
```

**Explanation**:

```txt
Total harga barang: 30000
Tidak ada diskon karena quantity kurang dari 5
Subtotal setelah diskon: 30000
Pajak 11 persen dari total harga barang setelah diskon: 3300
Total yang harus dibayar: 33330
```

---

### Test Case 2

**Input**:

```txt
quantity: 7
price: 10000
```

**Expected Output / Behavior**:

```txt
66045
```

**Explanation**:

```txt
Total harga barang: 70000
Diskon 15 persen karena quantity lebih dari 5: 10500
Subtotal setelah diskon: 59500
Pajak 11 persen dari total harga barang setelah diskon: 6545
Total yang harus dibayar: 66045
```

---

### Test Case 3

**Input**:

```txt
quantity: 12
price: 10000
```

**Expected Output / Behavior**:

```txt
106560
```

**Explanation**:

```txt
Total harga barang: 120000
Diskon 20 persen karena quantity lebih dari 10: 24000
Subtotal setelah diskon: 96000
Pajak 11 persen dari total harga barang setelah diskon: 10460
Total yang harus dibayar: 106560
```
