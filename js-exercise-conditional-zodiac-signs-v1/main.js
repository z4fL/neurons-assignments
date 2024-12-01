function zodiacSign(day, month) {
  let zodiac;

  switch (month) {
    case "Januari":
      if (day >= 1 && day <= 19) {
        zodiac = "Capricorn";
      } else if (day >= 20 && day <= 31) {
        zodiac = "Aquarius";
      } else {
        return "Input tanggal salah";
      }
      break;
    case "Februari":
      if (day >= 1 && day <= 18) {
        zodiac = "Aquarius";
      } else if (day >= 19 && day <= 29) {
        zodiac = "Pisces";
      } else {
        return "Input tanggal salah";
      }
      break;
    case "Maret":
      if (day >= 1 && day <= 20) {
        zodiac = "Pisces";
      } else if (day >= 21 && day <= 31) {
        zodiac = "Aries";
      } else {
        return "Input tanggal salah";
      }
      break;
    case "April":
      if (day >= 1 && day <= 19) {
        zodiac = "Aries";
      } else if (day >= 20 && day <= 30) {
        zodiac = "Taurus";
      } else {
        return "Input tanggal salah";
      }
      break;
    case "Mei":
      if (day >= 1 && day <= 20) {
        zodiac = "Taurus";
      } else if (day >= 21 && day <= 31) {
        zodiac = "Gemini";
      } else {
        return "Input tanggal salah";
      }
      break;
    case "Juni":
      if (day >= 1 && day <= 20) {
        zodiac = "Gemini";
      } else if (day >= 21 && day <= 30) {
        zodiac = "Cancer";
      } else {
        return "Input tanggal salah";
      }
      break;
    case "Juli":
      if (day >= 1 && day <= 22) {
        zodiac = "Cancer";
      } else if (day >= 23 && day <= 31) {
        zodiac = "Leo";
      } else {
        return "Input tanggal salah";
      }
      break;
    case "Agustus":
      if (day >= 1 && day <= 22) {
        zodiac = "Leo";
      } else if (day >= 23 && day <= 31) {
        zodiac = "Virgo";
      } else {
        return "Input tanggal salah";
      }
      break;
    case "September":
      if (day >= 1 && day <= 22) {
        zodiac = "Virgo";
      } else if (day >= 23 && day <= 30) {
        zodiac = "Libra";
      } else {
        return "Input tanggal salah";
      }
      break;
    case "Oktober":
      if (day >= 1 && day <= 22) {
        zodiac = "Libra";
      } else if (day >= 23 && day <= 31) {
        zodiac = "Scorpio";
      } else {
        return "Input tanggal salah";
      }
      break;
    case "November":
      if (day >= 1 && day <= 21) {
        zodiac = "Scorpio";
      } else if (day >= 22 && day <= 30) {
        zodiac = "Sagittarius";
      } else {
        return "Input tanggal salah";
      }
      break;
    case "Desember":
      if (day >= 1 && day <= 21) {
        zodiac = "Sagittarius";
      } else if (day >= 22 && day <= 31) {
        zodiac = "Capricorn";
      } else {
        return "Input tanggal salah";
      }
      break;
    default:
      return "Nama bulan salah";
  }

  return zodiac;
}

console.log(zodiacSign(30, "Desember"));
console.log(zodiacSign(31, "Desember"));
console.log(zodiacSign(41, "Desember"));
console.log(zodiacSign(31, "Februari"));
console.log(zodiacSign(29, "Februari"));
console.log(zodiacSign(29, "Januari"));

module.exports = zodiacSign;
