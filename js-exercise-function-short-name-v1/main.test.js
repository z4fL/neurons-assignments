const { expect, describe, it } = require("@jest/globals");

describe("shortName", () => {
  describe("When the name consists of only 1 word", () => {
    it("returns an error message in the form of Invalid Name", () => {
      const shortName = require("./main");
      expect(shortName("Mawar", "first")).toMatch("Invalid Name");
      expect(shortName("Melati", "last")).toMatch("Invalid Name");
    });
  });
  describe("When the value of the options parameter is 'first'", () => {
    it("returns the abbreviated first name", () => {
      const shortName = require("./main");
      expect(shortName("Sandra Bullock", "first")).toMatch("S. Bullock");
      expect(shortName("Michelle Monaghan", "first")).toMatch("M. Monaghan");
      expect(shortName("Maryjun Takahashi", "first")).toMatch("M. Takahashi");
    });
  });

  describe("When the value of the options parameter is 'last'", () => {
    it("returns the abbreviated last name", () => {
      const shortName = require("./main");
      expect(shortName("Kirana Larasati", "last")).toMatch("Kirana L.");
      expect(shortName("Indah Kusumaningrum", "last")).toMatch("Indah K.");
      expect(shortName("Raihaanun Nabila", "last")).toMatch("Raihaanun N.");
    });
  });

  describe("When the value of the options parameter is 'full'", () => {
    it("returns full name", () => {
      const shortName = require("./main");
      expect(shortName("Lena Meyer-Landrut", "full")).toMatch(
        "Lena Meyer-Landrut"
      );
      expect(shortName("Willa Fitzgerald", "full")).toMatch("Willa Fitzgerald");
      expect(shortName("Julia Gisella", "full")).toMatch("Julia Gisella");
    });
  });
});
