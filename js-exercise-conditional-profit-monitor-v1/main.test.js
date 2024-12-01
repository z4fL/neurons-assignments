const { expect, describe, it } = require('@jest/globals');
const profitMonitor = require('./main');

describe('check functionality profitMonitor function', () => {
  it('should not return null', () => {
    expect(profitMonitor(100, 50)).not.toBeNull();
  });

  describe('check return value', () => {
    describe('check return value when todayProfit > lastProfit', () => {
      it('should return "Profit naik sebanyak 50 point"', () => {
        expect(profitMonitor(100, 50)).toBe('Profit naik sebanyak 50 point');
      });

      it('should return "Profit naik sebanyak 100 point"', () => {
        expect(profitMonitor(200, 100)).toBe('Profit naik sebanyak 100 point');
      });
    });

    describe('check return value when todayProfit < lastProfit', () => {
      it('should return "Profit turun sebanyak 50 point"', () => {
        expect(profitMonitor(50, 100)).toBe('Profit turun sebanyak 50 point');
      });

      it('should return "Profit turun sebanyak 100 point"', () => {
        expect(profitMonitor(100, 200)).toBe('Profit turun sebanyak 100 point');
      });
    });

    describe('check return value when todayProfit === lastProfit', () => {
      it('should return "Profit stabil"', () => {
        expect(profitMonitor(100, 100)).toBe('Profit stabil');
      });

      it('should return "Profit stabil"', () => {
        expect(profitMonitor(200, 200)).toBe('Profit stabil');
      });
    });
  });
});
