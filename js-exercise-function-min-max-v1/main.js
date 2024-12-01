const minMax = (strAngka) => {
  let result = "",
    min = 0,
    max = 0,
    equal = 0;

  if (strAngka.length == 1) {
    return `Nilai terkecil dan terbesar adalah ${strAngka}`;
  }

  for (let i = 0; i < strAngka.length; i++) {
    if (strAngka[i] > max) {
      max = strAngka[i];
      if (min == 0) {
        min = max;
      }
    }

    if (strAngka[i] < min) {
      min = strAngka[i];
    }

    if (strAngka[i] == strAngka[i + 1] && i + 1 < strAngka.length) {
      equal = strAngka[i];
    }
  }

  if (max !== 0 && min !== 0 && min !== max) {
    result = `Nilai terkecil adalah ${min}, dan terbesar adalah ${max}`;
  } else {
    result = `Nilai terkecil dan terbesar adalah ${equal}`;
  }

  return result;
};

module.exports = minMax;
