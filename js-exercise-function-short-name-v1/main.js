const shortName = (name, options) => {
  let result = "",
    fullName = name.split(" ");

  if (fullName.length == 1) {
    return "Invalid Name";
  }

  if (options === "first") {
    result = fullName[0][0] + ". " + fullName[1];
  } else if (options === "last") {
    result = fullName[0] + " " + fullName[1][0] + ".";
  } else if (options === "full") {
    result = name;
  }

  return result;
};

// console.log(shortName("Djarot Purnomo", "first"));


module.exports = shortName;
