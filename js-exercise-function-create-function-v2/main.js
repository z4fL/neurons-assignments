const checkDatatype = (param) => {
  if (param === null) {
    return "null";
  } else if (Array.isArray(param)) {
    return "array"
  }

  return typeof param;
};

module.exports = { checkDatatype };
