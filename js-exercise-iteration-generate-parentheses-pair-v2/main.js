function generateParenthesesPair(numberOfPairs) {
  let output = "";

  for (let i = 1; i <= numberOfPairs; i++) {
    if (numberOfPairs <= 0) {
      break;
    }

    output = output + ")";
    output = "(" + output;
  }

  return output;
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
