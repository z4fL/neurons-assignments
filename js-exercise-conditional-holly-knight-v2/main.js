function hollyKnight(name, stamina, undead) {
  let output = "";
  
  if (stamina > undead) {
    output = `Holly Knight ${name} memenangkan pertempuran dengan mudah!`;
  } else if (stamina == undead) {
    output = `Beruntung Holly knight ${name} berhasil mengalahkan ${undead} undead!`;
  } else {
    output = `Holly knight ${name} mengalahkan ${stamina} undead, namun sayang holly knight ${name} gugur di medan perang!`;
  }

  return output;
}

console.log(hollyKnight('Lancelot', 30, 20)); // Holly Knight Lancelot memenangkan pertempuran dengan mudah!
console.log(hollyKnight('Gallahad', 10, 10)); // Beruntung Holly knight Gallahad berhasil mengalahkan 10 undead!
console.log(hollyKnight('Tristan', 100, 110)); // Holly knight Tristan mengalahkan 100 undead, namun sayang holly knight Tristan gugur di medan perang!

module.exports = hollyKnight;
