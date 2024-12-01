function studyRecommendation(mathScore, physicsScore, englishScore) {
  let output = "";
  if (mathScore < 80 && physicsScore < 75 && englishScore < 70) {
    return "Maaf, tidak ada rekomendasi yang dapat kami berikan.";
  }
  if (mathScore >= 85 && physicsScore >= 85 && englishScore >= 85) {
    output += "Teknik Informatika;";
  }
  if (mathScore >= 80 && physicsScore >= 75) {
    output += "Teknik;";
  }
  if (mathScore >= 80 && englishScore >= 70) {
    output += "Ekonomi;";
  }
  if (englishScore >= 70) {
    output += "Sastra Inggris;";
  }
  if (mathScore >= 80) {
    output += "Matematika;";
  }
  if (physicsScore >= 75) {
    output += "Fisika;";
  }

  return "Rekomendasi jurusan yang bisa dipilih: " + output;
}

console.log(studyRecommendation(0, 0, 0)); // expected Output => Maaf, tidak ada rekomendasi yang dapat kami berikan.
console.log(studyRecommendation(80, 70, 70)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Ekonomi;Sastra Inggris;Matematika;
console.log(studyRecommendation(80, 75, 60)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Teknik;Matematika;Fisika;
console.log(studyRecommendation(60, 85, 85)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;Fisika;
console.log(studyRecommendation(80, 85, 70)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Teknik;Ekonomi;Sastra Inggris;Matematika;Fisika;
console.log(studyRecommendation(85, 70, 70)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Ekonomi;Sastra Inggris;Matematika;
console.log(studyRecommendation(64, 90, 85)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;Fisika;
console.log(studyRecommendation(40, 85, 60)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Fisika;
console.log(studyRecommendation(85, 85, 85)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Teknik Informatika;Teknik;Ekonomi;Sastra Inggris;Matematika;Fisika;

module.exports = studyRecommendation;
