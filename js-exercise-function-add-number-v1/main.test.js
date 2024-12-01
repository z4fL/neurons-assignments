const { expect, describe, it } = require("@jest/globals");

describe("addNumber", () => {
  describe("when the value of the options parameter is right", () => {
    it("returns the sum of the numbers from the rightmost sequence in the form of a string", () => {
      const addNumber = require("./main");
      expect(addNumber("012345", "left")).toMatch("13579");
      expect(addNumber("672318", "left")).toMatch("139549");
      expect(addNumber("653412", "left")).toMatch("118753");
    });
  });

  describe("when the value of the options parameter is left", () => {
    it("returns the sum of the numbers from the leftmost sequence in the form of a string", () => {
      const addNumber = require("./main");
      expect(addNumber("753621", "right")).toMatch("389812");
      expect(addNumber("965732", "right")).toMatch("510121115");
      expect(addNumber("612845", "right")).toMatch("9121037");
    });
  });
});
