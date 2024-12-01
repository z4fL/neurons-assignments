function deretanAngkaHinggaN(n) {
  let result = "";

  if (n <= 1) {
    return "Incorrect param";
  }

  for (let i = 1; i < n; i++) {
    for (let j = n - i; j >= 1; j--) {
      result += j + "";
    }
  }

  return result;
}

console.log(deretanAngkaHinggaN(6));

module.exports = deretanAngkaHinggaN;
