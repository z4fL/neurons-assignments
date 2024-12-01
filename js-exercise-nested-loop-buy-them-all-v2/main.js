function buyThemAll(books, budget) {
  let result = "",
    arrayBooks = (books.endsWith(",") ? books.slice(0, -1) : books).split(","),
    totalBooks = arrayBooks.length,
    totalPrice = 0,
    book2Buy = "",
    remainBudget = budget,
    totalBuyBooks = 0;

  let bookTitle = "";
  let bookPrice = 0;
  for (let i = 0; i < totalBooks; i++) {
    let dataBook = arrayBooks[i].split(":");
    bookTitle = dataBook[0];
    bookPrice = parseInt(dataBook[1]);

    if (remainBudget > bookPrice && remainBudget != 0) {
      book2Buy += bookTitle + ", ";
      totalPrice += bookPrice;
      remainBudget = budget - totalPrice;
      totalBuyBooks++;
    } else if (
      remainBudget < bookPrice &&
      arrayBooks[i + 1] !== undefined &&
      remainBudget > arrayBooks[i + 1].split(":")[1] &&
      remainBudget != 0
    ) {
      let dataNextBook = arrayBooks[i + 1].split(":");
      bookTitle = dataNextBook[0];
      bookPrice = parseInt(dataNextBook[1]);

      book2Buy += bookTitle + ", ";
      totalPrice += bookPrice;
      remainBudget = budget - totalPrice;
      totalBuyBooks++;
    } else if (remainBudget < 0) {
      break;
    }
  }

  if (book2Buy === "") {
    result = `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${remainBudget}.`;
  } else {
    result = `Afista membeli ${totalBuyBooks} buku yaitu ${book2Buy.slice(
      0,
      -2
    )}. Total belanja ${totalPrice}, sisa uang Afista adalah ${remainBudget}.`;
  }

  if (budget == 0) {
    return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budget}.`;
  }

  return result;
}

// console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.
console.log(
  buyThemAll(
    "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000",
    200000
  )
); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
