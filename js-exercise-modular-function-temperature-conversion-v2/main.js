function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
  let result = (kelvin - 273.15) * (9 / 5) + 32;
  result = Number(result.toFixed(2));
  if (result == -0) result = 0;

  return result;
}

function celsiusToFahrenheit(celsius) {
  let result = celsius * (9 / 5) + 32;
  result = Number(result.toFixed(2));
  if (result == -0) result = 0;

  return result;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
  let result = (fahrenheit - 32) * (5 / 9) + 273.15;
  result = Number(result.toFixed(2));
  if (result == -0) result = 0;

  return result;
}

function fahrenheitToCelsius(fahrenheit) {
  let result = (fahrenheit - 32) * (5 / 9);
  result = Number(result.toFixed(2));
  if (result == -0) result = 0;

  return result;
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  let output = 0;
  if (initialUnit === "C" && finalUnit !== "C") {
    if (finalUnit === "K") {
      output = celsiusToKelvin(temperature);
    } else if (finalUnit === "F") {
      output = celsiusToFahrenheit(temperature);
    }
  } else if (initialUnit === "F" && finalUnit !== "F") {
    if (finalUnit === "C") {
      output = fahrenheitToCelsius(temperature);
    } else if (finalUnit === "K") {
      output = fahrenheitToKelvin(temperature);
    }
  } else if (initialUnit === "K" && finalUnit !== "K") {
    if (finalUnit === "C") {
      output = kelvinToCelsius(temperature);
    } else if (finalUnit === "F") {
      output = kelvinToFahrenheit(temperature);
    }
  }

  return output;
}

console.log(convertTemperature(0, "C", "K")); // 273.15
console.log(convertTemperature(0, "C", "F")); // 32

console.log(convertTemperature(0, "F", "C")); // -17.78
console.log(convertTemperature(0, "F", "K")); // 255.37
console.log(convertTemperature(-459.67, "F", "K")); // 0.00

console.log(convertTemperature(0, "K", "C")); // -273.15
console.log(convertTemperature(0, "K", "F")); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
