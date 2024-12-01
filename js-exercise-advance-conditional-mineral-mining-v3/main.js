function mineralMining(mineral, miningPower, duration, cost) {
  let output, time2Get, marketPrice, income, totalIncome;

  if (mineral == "gold") {
    time2Get = 30;
    marketPrice = 1;
  } else if (mineral == "silver") {
    time2Get = 20;
    marketPrice = 0.6;
  } else if (mineral == "coper") {
    time2Get = 5;
    marketPrice = 0.3;
  } else if (mineral == "uranium") {
    time2Get = 75;
    marketPrice = 3;
  } else if (mineral == "platinum") {
    time2Get = 15;
    marketPrice = 2;
  } else if (mineral == "titanium") {
    time2Get = 55;
    marketPrice = 1.5;
  } else {
    return (output = "Invalid mineral name");
  }

  income = (duration / time2Get) * miningPower;
  totalIncome = income * marketPrice;

  if (cost > totalIncome) {
    output = `Mineral mining at a loss ${totalIncome - cost}`;
  } else if (cost < totalIncome) {
    output = `Mineral mining profit ${totalIncome - cost}`;
  } else {
    output = "Mineral mining get nothing";
  }

  return output;
}

console.log(mineralMining("gold", 10, 70, 59)); // Mineral mining at a loss -35.666666666666664
console.log(mineralMining("rock", 10, 70, 40)); // Invalid mineral name
console.log(mineralMining("uranium", 10, 70, 150)); // Mineral mining at a loss -122
console.log(mineralMining("silver", 33, 200, 30)); // Mineral mining profit 168
console.log(mineralMining("titanium", 25, 100, 200)); // Mineral mining at a loss -131.8181818181818
console.log(mineralMining("gold", 1, 100, 15)); // Mineral mining at a loss -11.666666666666666
console.log(mineralMining("titanium", 20, 350, 150)); // Mineral mining at a loss 40.90909090909091

module.exports = mineralMining;
