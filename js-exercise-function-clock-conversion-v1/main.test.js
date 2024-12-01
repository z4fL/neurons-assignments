const { expect, describe, it } = require("@jest/globals");

describe("clockConversion", () => {
  describe("when the hour value is below 1", () => {
    it('returns the error message "Hour cannot be under 1"', () => {
      const clockConversion = require("./main");
      
      expect(clockConversion(0, "minutes")).toBe("Hour cannot be under 1");
      expect(clockConversion(-99, "seconds")).toBe("Hour cannot be under 1");
    });
  });
  describe("when the params value is minutes", () => {
    it("returns the converted hour in minutes", () => {
      const clockConversion = require("./main");

      expect(clockConversion(22, "minutes")).toBe(1320);
      expect(clockConversion(9, "minutes")).toBe(540);
    });
  });
  describe("when the params value is seconds", () => {
    it("returns the converted hour in minutes", () => {
      const clockConversion = require("./main");

      expect(clockConversion(13, "seconds")).toBe(46800);
      expect(clockConversion(24, "seconds")).toBe(86400);
    });
  });

  it("returns the hour that has been converted to units of minutes or seconds", () => {
    const clockConversion = require("./main");

    expect(clockConversion(3, "minutes")).toBe(180);
    expect(clockConversion(1, "seconds")).toBe(3600);
  });
});
