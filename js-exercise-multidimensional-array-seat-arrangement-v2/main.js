function travelSeat(passengers, seatColumn) {
  if (seatColumn <= 0) {
    return "Invalid number";
  }
  if (passengers.length === 0) {
    return "Oops! tickets not sold!";
  }

  const nameSort = passengers.sort();
  let result = [];

  for (let i = 0; i < nameSort.length; i += seatColumn) {
    let column = nameSort.slice(i, i + seatColumn);

    while (column.length < seatColumn) {
      column.push("Seat available");
    }

    result.push(column);
  }

  return result;
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));

module.exports = travelSeat;
