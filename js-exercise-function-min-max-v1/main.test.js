const { expect, describe, it } = require("@jest/globals");

describe("minMax", () => {
  describe("When the maximum and minimum numbers found are the same", () => {
    it("returns a message in the form of the maximum and minimum numbers with the same nominal", () => {
      const minMax = require("./main");
      expect(minMax("1")).toMatch("Nilai terkecil dan terbesar adalah 1");
      expect(minMax("9999999999999999")).toMatch("Nilai terkecil dan terbesar adalah 9");
      expect(minMax("666")).toMatch("Nilai terkecil dan terbesar adalah 6");
    });
  });

  describe("When the maximum and minimum numbers found are different", () => {
    it("returns a message in the form of the largest and smallest numbers with different nominal", () => {
      const minMax = require("./main");
      expect(minMax("8254371")).toMatch("Nilai terkecil adalah 1, dan terbesar adalah 8");
      expect(minMax("9746532")).toMatch("Nilai terkecil adalah 2, dan terbesar adalah 9");
      expect(minMax("65")).toMatch("Nilai terkecil adalah 5, dan terbesar adalah 6");
    });
  });
});
