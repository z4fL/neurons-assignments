const { expect, describe, it } = require("@jest/globals");

describe("calcAge", () => {
  describe("when the age value is below 1", () => {
    it('returns the error message "Age cannot be under 1 year"', () => {
      const calcAge = require("./main");
      
      expect(calcAge(0, "months")).toBe("Age cannot be under 1 year");
      expect(calcAge(-1, "days")).toBe("Age cannot be under 1 year");
    });
  });
  describe("when the params value is months", () => {
    it("returns the converted age in months", () => {
      const calcAge = require("./main");

      expect(calcAge(22, "months")).toBe(264);
      expect(calcAge(9, "months")).toBe(108);
    });
  });
  describe("when the params value is days", () => {
    it("returns the converted age in months", () => {
      const calcAge = require("./main");

      expect(calcAge(13, "days")).toBe(4745);
      expect(calcAge(56, "days")).toBe(20440);
    });
  });

  it("returns the age that has been converted to units of months or days", () => {
    const calcAge = require("./main");

    expect(calcAge(3, "months")).toBe(36);
    expect(calcAge(1, "days")).toBe(365);
  });
});
