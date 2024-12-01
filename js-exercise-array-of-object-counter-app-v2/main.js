function countryMedals(players, countries) {
  const playerCountries = [];

  if (countries === undefined) {
    return "Countries not provided";
  }

  countries.forEach((name) => {
    const filteredPlayer = playerData.filter((data) => data.country === name);

    const athlete = [];
    filteredPlayer.forEach((e) => athlete.push(e.name));

    const totalMedals = filteredPlayer.reduce((acc, curr) => acc + curr.medals, 0);

    playerCountries.push({
      name,
      athlete,
      totalMedals,
    });
  });

  return playerCountries;
}

let playerData = [
  {
    name: "Lionel Messi",
    medals: 5,
    country: "Argentina",
  },
  {
    name: "Iker Casillas",
    medals: 7,
    country: "Spain",
  },
  {
    name: "Ahmad Waluyo",
    medals: 5,
    country: "Indonesia",
  },
  {
    name: "Alvin Arkansas",
    medals: 8,
    country: "Indonesia",
  },
  {
    name: "Gabriel Batistuta",
    medals: 1,
    country: "Argentina",
  },
  {
    name: "Xavi Hernandes",
    medals: 9,
    country: "Spain",
  },
  {
    name: "Carles Puyol",
    medals: 5,
    country: "Spain",
  },
  {
    name: "Jatmika Teja",
    medals: 6,
    country: "Indonesia",
  },
  {
    name: "Sergio Aguero",
    medals: 3,
    country: "Argentina",
  },
];

console.log(countryMedals(playerData, ["Indonesia", "Spain"]));
console.log(countryMedals(playerData, ["Argentina", "Spain"]));
console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals;
