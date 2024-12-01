const { expect, describe, it } = require('@jest/globals');
const resistorValue = require('./main');

describe('Check resistorValue function', () => {
  it('should not return null', () => {
    expect(resistorValue('brown', 'black', 'red', 'gold')).not.toBeNull();
    expect(resistorValue('red', 'red', 'red', 'gold')).not.toBeNull();
    expect(resistorValue('yellow', 'violet', 'green', 'silver')).not.toBeNull();
  });

  describe('Check resistorValue function with brown, black, red, gold', () => {
    it('should return 1000 ohm ±5%', () => {
      expect(resistorValue('brown', 'black', 'red', 'gold')).toBe('1000 ohm ±5%');
    });
  });

  describe('Check resistorValue function with red, red, red, gold', () => {
    it('should return 2200 ohm ±5%', () => {
      expect(resistorValue('red', 'red', 'red', 'gold')).toBe('2200 ohm ±5%');
    });
  });

  describe('Check resistorValue function with yellow, violet, green, silver', () => {
    it('should return 4700000 ohm ±10%', () => {
      expect(resistorValue('yellow', 'violet', 'green', 'silver')).toBe('4700000 ohm ±10%');
    });
  });

  describe('Check resistorValue function with yellow, green, green, silver', () => {
    it('should return 4500000 ohm ±10%', () => {
      expect(resistorValue('yellow', 'green', 'green', 'silver')).toBe('4500000 ohm ±10%');
    });
  });

  describe('Check resistorValue function with blue, green, violet, gold', () => {
    it('should return 650000000 ohm ±5%', () => {
      expect(resistorValue('blue', 'green', 'violet', 'gold')).toBe('650000000 ohm ±5%');
    });
  });
});
