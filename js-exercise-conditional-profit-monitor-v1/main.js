function profitMonitor(todayProfit, lastProfit) {
  let output = "";
  if (todayProfit > lastProfit) {
    output = `Profit naik sebanyak ${todayProfit - lastProfit} point`;
  } else if (todayProfit < lastProfit) {
    output = `Profit turun sebanyak ${lastProfit - todayProfit} point`;
  } else {
    output = "Profit stabil";
  }

  return output;
}

console.log(profitMonitor(100, 50));
console.log(profitMonitor(50, 100));
console.log(profitMonitor(100, 100));

module.exports = profitMonitor;
