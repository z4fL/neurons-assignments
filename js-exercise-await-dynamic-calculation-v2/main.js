async function calculate(number1, number2) {
  let result = 0;
  if (number1 === 0 && number2 === 0) {
    return Promise.reject("number1 and number2 cannot be 0");
  } else if (number1 % 2 === 0 && number2 % 2 === 0) {
    result = await (number1 - number2);
  } else if (number1 % 2 === 0 && number2 % 2 === 1) {
    result = await (number1 + number2);
  } else if (number1 % 2 === 1) {
    result = await (number1 * number2);
  }

  return Promise.resolve(result);
}

module.exports = calculate;
