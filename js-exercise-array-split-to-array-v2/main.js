function splitToArr(str) {
  let result = [],
    word = "";

  if (str === undefined) {
    return "Invalid input";
  } else if (str === "") {
    return "Data not available";
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ";") {
      result.push(word);
      word = "";
    } else if (str[i] === "-") {
      result.push(word);
      word = "";
    } else {
      word += str[i];
      if (word.length === 1) {
        word = word.toUpperCase();
      }
    }
  }
  if (word !== "") {
    result.push(word);
    word = "";
  }

  return result;
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"));
console.log(
  splitToArr(
    "ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"
  )
);
console.log(splitToArr(""));
console.log(splitToArr());

module.exports = splitToArr;
