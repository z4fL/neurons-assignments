function countAndSum(number) {
  let output = 0,
    counter = 1;

  for (let i = 1; i <= number; i++) {
    output += counter;
    if (counter == 3) {
      counter = 1;
    } else {
      counter++;
    }
  }

  return output;
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
