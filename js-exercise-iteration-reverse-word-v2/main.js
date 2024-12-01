function reverseUnique(word) {
  let output = "";
  for (let i = 0; i < word.length; i++) {
    const e = word[i];

    if (e === word[i + 1]) {
      continue;
    }

    output = e + output;
  }

  return output;
}

console.log(reverseUnique("greating")); //gnitaerg
console.log(reverseUnique("learning")); //gninrael
console.log(reverseUnique("book")); // kob
console.log(reverseUnique("RuangGuru")); //uruGnauR
console.log(reverseUnique("I am reading a book how to hunt a deer")); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
