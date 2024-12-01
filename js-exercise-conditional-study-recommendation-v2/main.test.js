const { expect, describe, it } = require("@jest/globals");
const studyRecommendation = require("./main");

describe("check functionality studyRecommendation function", () => {
  it("should not return null", () => {
    expect(studyRecommendation(0, 0, 0)).not.toBeNull();
    expect(studyRecommendation(80, 75, 70)).not.toBeNull();
    expect(studyRecommendation(85, 85, 85)).not.toBeNull();
    expect(studyRecommendation(80, 75, 85)).not.toBeNull();
    expect(studyRecommendation(80, 85, 70)).not.toBeNull();
    expect(studyRecommendation(85, 75, 70)).not.toBeNull();
    expect(studyRecommendation(85, 85, 70)).not.toBeNull();
    expect(studyRecommendation(80, 85, 85)).not.toBeNull();
    expect(studyRecommendation(85, 75, 85)).not.toBeNull();
    expect(studyRecommendation(85, 85, 85)).not.toBeNull();
  });

  describe("when all scores are below minimum", () => {
    it('should return "Maaf, tidak ada rekomendasi yang dapat kami berikan."', () => {
      expect(studyRecommendation(0, 0, 0)).toBe("Maaf, tidak ada rekomendasi yang dapat kami berikan.");
      expect(studyRecommendation(79, 74, 69)).toBe("Maaf, tidak ada rekomendasi yang dapat kami berikan.");
      expect(studyRecommendation(79, 74, 50)).toBe("Maaf, tidak ada rekomendasi yang dapat kami berikan.");
    });
  });

  describe("when math scores are above minimum", () => {
    it("should return correct recommendation", () => {
      expect(studyRecommendation(80, 75, 70)).toBe("Rekomendasi jurusan yang bisa dipilih: Teknik;Ekonomi;Sastra Inggris;Matematika;Fisika;");
      expect(studyRecommendation(80, 75, 50)).toBe("Rekomendasi jurusan yang bisa dipilih: Teknik;Matematika;Fisika;");
      expect(studyRecommendation(80, 50, 70)).toBe("Rekomendasi jurusan yang bisa dipilih: Ekonomi;Sastra Inggris;Matematika;");
      expect(studyRecommendation(80, 50, 50)).toBe("Rekomendasi jurusan yang bisa dipilih: Matematika;");
      expect(studyRecommendation(85, 75, 70)).toBe("Rekomendasi jurusan yang bisa dipilih: Teknik;Ekonomi;Sastra Inggris;Matematika;Fisika;");
    });
  });

  describe("when physic scores are above minimum", () => {
    it("should return correct recommendation", () => {
      expect(studyRecommendation(75, 80, 70)).toBe("Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;Fisika;");
      expect(studyRecommendation(75, 80, 50)).toBe("Rekomendasi jurusan yang bisa dipilih: Fisika;");
      expect(studyRecommendation(50, 80, 70)).toBe("Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;Fisika;");
      expect(studyRecommendation(50, 80, 50)).toBe("Rekomendasi jurusan yang bisa dipilih: Fisika;");
    });
  });

  describe("when english scores are above minimum", () => {
    it("should return correct recommendation", () => {
      expect(studyRecommendation(75, 75, 80)).toBe("Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;Fisika;");
      expect(studyRecommendation(75, 50, 80)).toBe("Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;");
      expect(studyRecommendation(50, 75, 80)).toBe("Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;Fisika;");
      expect(studyRecommendation(50, 50, 80)).toBe("Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;");
    });
  });
});
