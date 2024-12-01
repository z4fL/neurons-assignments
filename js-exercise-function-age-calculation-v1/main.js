const calcAge = (age, params) => {
  let result;
  if (age < 1) {
    return "Age cannot be under 1 year";
  }

  if (params === "months") {
    result = age * 12;
  } else if (params === "days") {
    result = age * 365;
  }

  return result;
};

module.exports = calcAge;
