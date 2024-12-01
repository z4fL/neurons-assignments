function quantityDiscount(quantity, price) {
  let totalHarga, diskon, pajak, subtotal, totalBayar;

  totalHarga = price * quantity;

  if (quantity >= 10) {
    diskon = totalHarga * 0.2;
  } else if (quantity >= 5) {
    diskon = totalHarga * 0.15;
  } else {
    diskon = 0;
  }

  subtotal = totalHarga - diskon;
  pajak = subtotal * 0.11;
  totalBayar = subtotal + pajak;

  return totalBayar;
}

console.log(quantityDiscount(1, 100));
console.log(quantityDiscount(3, 100));
console.log(quantityDiscount(5, 100));
console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
console.log(quantityDiscount(3, 10000));
console.log(quantityDiscount(12, 10000));

module.exports = quantityDiscount;
