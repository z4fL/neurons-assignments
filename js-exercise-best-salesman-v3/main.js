function salesReport(data, correction) {
  const sales = ["Adi", "Budi", "Poltak", "Sri", "Udin"];

  if (correction && correction.length > 0) {
    correction.forEach((dataCorr) => {
      if (dataCorr.type === "tambah") {
        data.push(dataCorr);
      } else if (dataCorr.type === "koreksi") {
        index = data.findIndex(
          (item) =>
            item.salesName === dataCorr.salesName &&
            item.salesDate === dataCorr.salesDate
        );

        data[index].totalSales = dataCorr.totalSales;
      }
    });
  }

  const monthlySales = data.reduce((acc, curr) => acc + curr.totalSales, 0);

  const totalSalesByName = sales.reduce((acc, curr) => {
    acc[curr] = 0;

    return acc;
  }, {});

  data.forEach((item) => {
    totalSalesByName[item.salesName] += item.totalSales;
  });

  let bestSalesman = "";
  let highestSales = 0;
  Object.entries(totalSalesByName).forEach(([key, value]) => {
    if (value > highestSales) {
      highestSales = totalSalesByName[key];
      bestSalesman = `Penjualan terbanyak dilakukan oleh ${key} dengan total penjualan dalam 1 bulan sebesar ${highestSales}`;
    }
  });

  return {
    monthlySales,
    totalSalesByName,
    bestSalesman,
  };
}

module.exports = {
  salesReport,
};
