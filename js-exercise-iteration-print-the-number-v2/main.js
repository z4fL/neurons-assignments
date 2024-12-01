function printNumber(totalNumber) {
  let output = "",
    number = 1;
  for (let i = 1; i <= totalNumber; i++) {
    output += `${number}`;
    if (number == 3) {
      number = 1;
    } else {
      number++;
    }
  }

  return output;
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber;
