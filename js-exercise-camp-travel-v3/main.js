function travelDiscount(id, amount) {
  let status = "",
    subtotal = 0,
    discount = 0,
    totalPrice = 0;

  if (id.includes("STD")) {
    status = "STUDENT";
  } else if (id.includes("CORP")) {
    status = "CORPORATE";
  } else {
    return "Maaf, voucher yang anda miliki tidak valid!";
  }

  if (status === "STUDENT") {
    subtotal = 20000 * amount;
    if (amount > 20) {
      discount = subtotal * 0.2;
    }
  } else if (status === "CORPORATE") {
    subtotal = 50000 * amount;
    if (amount > 30) {
      discount = subtotal * 0.25;
    }
  }

  totalPrice = subtotal - discount;
  return `Selamat! Voucher untuk ${status} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalPrice}.`;
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount;
