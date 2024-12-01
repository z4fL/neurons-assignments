function trasureHunter(dailyLog) {
  let output = 0,
    hartaKarun = "$",
    jatuhLaut = "x",
    jatuhJurang = "#";

  for (let i = 0; i < dailyLog.length; i++) {
    const element = dailyLog[i];

    if (element == hartaKarun) {
      output += 100;
    } else if (element == jatuhLaut) {
      if (output == 0) {
        output = 0;
      } else {
        output -= 10;
      }
    } else if (element == jatuhJurang) {
      if (output == 0) {
        output = 0;
      } else {
        output = output * 0.5;
      }
    }
  }

  return output;
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
