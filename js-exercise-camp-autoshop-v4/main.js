function convertItems(items) {
  const split = [];
  items.forEach((e) => {
    split.push(e.split("|"));
  });

  return split;
}

function filterItems(items) {
  const filter = items.filter((e) => e.length === 3);
  filter.forEach((e) => {
    e[1] = Number(e[1]);
  });

  return filter;
}

function generateSpareParts(items) {
  const spareParts = items.map((e) => {
    return {
      name: e[0],
      price: e[1],
      category: e[2],
    };
  });

  return spareParts;
}

function itemsStatistics(items) {
  const categoryCount = {};
  items.forEach((sparepart) => {
    categoryCount[sparepart[2]] = (categoryCount[sparepart[2]] || 0) + 1;
  });

  return categoryCount;
}

function generateItemsData(items) {
  return {
    spare_parts: generateSpareParts(filterItems(convertItems(items))),
    statistics: itemsStatistics(filterItems(convertItems(items))),
  };
}

const items = [
  "Spakbor Gordon|150000|variation",
  "Head Lamp",
  "USD KX150|8500000|bodyParts",
  "Handle Expedition|275000|variation",
  "Karet Body",
  "Body set KTM|1899950|bodyParts",
  "Jok Gordon|250000|variation",
  "Behel Bodyset Gordon",
  "CDI BRT KLX|625000|electricity",
  "Cover jok KLX|185000|variation",
];

console.log(generateItemsData(items));

module.exports = {
  convertItems,
  filterItems,
  generateSpareParts,
  itemsStatistics,
  generateItemsData,
};
