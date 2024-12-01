function resistorValue(bandColor1, bandColor2, bandColor3, bandColor4) {
  let significantFigure = "",
    multiplier = 0,
    tolerance = 0,
    nilaiResistor = 0;

  if (bandColor1 == "black") {
    significantFigure += "0";
  } else if (bandColor1 == "brown") {
    significantFigure += "1";
  } else if (bandColor1 == "red") {
    significantFigure += "2";
  } else if (bandColor1 == "orange") {
    significantFigure += "3";
  } else if (bandColor1 == "yellow") {
    significantFigure += "4";
  } else if (bandColor1 == "green") {
    significantFigure += "5";
  } else if (bandColor1 == "blue") {
    significantFigure += "6";
  } else if (bandColor1 == "violet") {
    significantFigure += "7";
  } else if (bandColor1 == "grey") {
    significantFigure += "8";
  } else if (bandColor1 == "white") {
    significantFigure += "9";
  }

  if (bandColor2 == "black") {
    significantFigure += "0";
  } else if (bandColor2 == "brown") {
    significantFigure += "1";
  } else if (bandColor2 == "red") {
    significantFigure += "2";
  } else if (bandColor2 == "orange") {
    significantFigure += "3";
  } else if (bandColor2 == "yellow") {
    significantFigure += "4";
  } else if (bandColor2 == "green") {
    significantFigure += "5";
  } else if (bandColor2 == "blue") {
    significantFigure += "6";
  } else if (bandColor2 == "violet") {
    significantFigure += "7";
  } else if (bandColor2 == "grey") {
    significantFigure += "8";
  } else if (bandColor2 == "white") {
    significantFigure += "9";
  }

  if (bandColor3 == "black") {
    multiplier = 1;
  } else if (bandColor3 == "brown") {
    multiplier = 10;
  } else if (bandColor3 == "red") {
    multiplier = 100;
  } else if (bandColor3 == "orange") {
    multiplier = 1000;
  } else if (bandColor3 == "yellow") {
    multiplier = 10000;
  } else if (bandColor3 == "green") {
    multiplier = 100000;
  } else if (bandColor3 == "blue") {
    multiplier = 1000000;
  } else if (bandColor3 == "violet") {
    multiplier = 10000000;
  } else if (bandColor3 == "gold") {
    multiplier = 0.1;
  } else if (bandColor3 == "silver") {
    multiplier = 0.01;
  }

  if (bandColor4 == "black") {
    tolerance = 20;
  } else if (bandColor4 == "brown") {
    tolerance = 1;
  } else if (bandColor4 == "red") {
    tolerance = 2;
  } else if (bandColor4 == "gold") {
    tolerance = 5;
  } else if (bandColor4 == "silver") {
    tolerance = 10;
  }

  nilaiResistor = parseInt(significantFigure) * multiplier;

  return `${nilaiResistor} ohm ±${tolerance}%`;
}

console.log(resistorValue("brown", "black", "red", "gold"));
console.log(resistorValue("red", "red", "red", "gold"));
console.log(resistorValue("yellow", "violet", "green", "silver"));
console.log(resistorValue("blue", "grey", "green", "silver"));

module.exports = resistorValue;
