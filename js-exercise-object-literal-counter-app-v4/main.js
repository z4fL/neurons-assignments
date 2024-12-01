function counterApp(arr) {
  const countDuplicate = {};
  if (arr === undefined) {
    return "Invalid input";
  }
  if (arr.length === 0) {
    return "Data not found";
  }

  arr.forEach((value) => {
    countDuplicate[value] = (countDuplicate[value] || 0) + 1;
  });

  return countDuplicate;
}

console.log(
  counterApp([
    "Hikman",
    "Naufal",
    "Kanda",
    "Arya",
    "Kanda",
    "Hikman",
    "Naufal",
    "Hikman",
    "Kanda",
    "Kanda",
  ])
);
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp;
