function discountChecker(costumers, date) {
  const day = Number(date.slice(0, 2));
  const isEvenDate = day % 2 === 0;

  const costumersDiscount = costumers.filter((value) => {
    const harga = value[0].slice(2);
    const status = value[1];

    if ((isEvenDate && harga % 2 === 0) || status === "member") {
      return value;
    } else if ((!isEvenDate && harga % 2 === 1) || status === "member") {
      return value;
    }
  });

  return costumersDiscount; // TODO: replace this
}

let costumers = [
  ["$ 228", "member"],
  ["$ 19", "non-member"],
  ["$ 238", "non-member"],
  ["$ 49", "member"],
];

console.log(discountChecker(costumers, "28-10-2022"));

var costumers2 = [
  ["$ 754", "member"],
  ["$ 233", "member"],
  ["$ 31", "non-member"],
  ["$ 332", "non-member"],
];

console.log(discountChecker(costumers2, "11-06-2022"));

module.exports = discountChecker;
