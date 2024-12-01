const { expect, describe, it } = require('@jest/globals');
const quantityDiscount = require('./main');

describe('check function quantityDiscount', () => {
  it('should not return null', () => {
    expect(quantityDiscount(1, 100)).not.toBeNull();
    expect(quantityDiscount(3, 100)).not.toBeNull();
    expect(quantityDiscount(5, 100)).not.toBeNull();
    expect(quantityDiscount(10, 100)).not.toBeNull();
    expect(quantityDiscount(15, 3)).not.toBeNull();
  });

  describe('when quantity is less than 5', () => {
    it('should return correct total', () => {
      expect(quantityDiscount(1, 100)).toBe(111);
      expect(quantityDiscount(3, 100)).toBe(333);
    });
  });

  describe('when quantity is more than 5 and less than 10', () => {
    it('should return correct total', () => {
      expect(quantityDiscount(5, 100)).toBe(471.75);
      expect(quantityDiscount(6, 100)).toBe(566.1);
      expect(quantityDiscount(9, 100)).toBe(849.15);
    });
  });

  describe('when quantity is more than 10', () => {
    it('should return correct total', () => {
      expect(quantityDiscount(10, 100)).toBe(888);
      expect(quantityDiscount(15, 3)).toBe(39.96);
    });
  });
});
