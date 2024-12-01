const correctCapitalization = (param) => {
  let result = "",
    isNextCapitalize = true;
  for (let i = 0; i < param.length; i++) {
    let char = param[i];

    if (isNextCapitalize && i >= 0 && char !== " ") {
      char = char.toUpperCase();
      isNextCapitalize = false;
    } else if (char === ".") {
      isNextCapitalize = true;
    }

    result += char;
  }

  return result;
};

module.exports = correctCapitalization;
