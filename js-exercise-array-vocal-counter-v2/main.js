function vocalCounter(array) {
  let result = "",
    filter = "a,e,i,o,u,A,E,I,O,U".split(","),
    listVocal = "";

  const filteredArray = array.filter((char) => {
    for (let i = 0; i < filter.length; i++) {
      const vocal = filter[i];

      if (char === vocal) {
        listVocal += char;
        return char;
      }
    }
  });

  if (filteredArray.length === 0) {
    return "Tidak ada huruf vokal yang ditemukan";
  }
  result = `Jumlah vokal yang ditemukan sebanyak ${filteredArray.length} berupa ${listVocal}`;

  return result;
}

console.log(vocalCounter(["x", "A", 5, "o", 1, "T", "b"]));
console.log(vocalCounter([-10, "E", "e", "z", "p", "i", 4]));
console.log(vocalCounter(["q", "W", "r", "t", "Y"]));

module.exports = vocalCounter;
