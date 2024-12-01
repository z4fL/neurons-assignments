const addNumber = (numStr, options) => {
  let result = "";

  if (options === "left") {
    for (let i = 0; i < numStr.length; i++) {
      const number = Number(numStr[i]);

      if (i + 1 < numStr.length) {
        const nextNumber = Number(numStr[i + 1]);
        result += `${number + nextNumber}`;
      }
    }
  } else if (options === "right") {
    for (let i = numStr.length - 1; i >= 0; i--) {
      const number = Number(numStr[i]);

      if (i - 1 >= 0) {
        const nextNumber = Number(numStr[i - 1]);
        result += `${number + nextNumber}`;
      }
    }
  }

  return result;
};

module.exports = addNumber;
