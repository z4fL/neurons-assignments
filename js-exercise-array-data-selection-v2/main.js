function dataSelection(data, amount, start) {
  if (data.length === 0) {
    return "Data not found";
  }
  if (typeof amount === "string" || typeof start === "string") {
    return "Invalid command";
  }
  if (amount < 1) {
    return "Minimum amount is 1";
  }
  if (start < 0) {
    return "Starting number cannot be below 0";
  }
  if (start === undefined) {
    start = 0;
  }

  const selectionArray = data.filter(
    (e, idx) => idx >= start - 1 && idx < start + amount - 1
  );

  return selectionArray;
}

console.log(
  dataSelection(
    ["Semangka", "Nanas", "Jeruk", "Mengkudu", "Jambu klutuk"],
    2,
    3
  )
);
console.log(
  dataSelection(["Deny", "Ganjar", "Raam", "Imam", "Eddy", "Afis"], 4, 1)
);
console.log(dataSelection([97, 44, 21, 76, 10, 1, 33], 2, -1));
console.log(dataSelection(["Tegar", "Miranda", "Wulan"], 0, 3));
console.log(dataSelection(["Fauzan", "Uli", "Vika"], "1", "3"));
console.log(dataSelection([], 1, 3));

module.exports = dataSelection;
