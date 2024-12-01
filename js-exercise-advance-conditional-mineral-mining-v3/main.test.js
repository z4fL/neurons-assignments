const { expect, describe, it } = require('@jest/globals');
const mineralMining = require('./main');

describe('Invalid Mineral Name', () => {
  describe('when mineral name not in the list', () => {
    it('mineral name rock should return Invalid mineral name', () => {
      expect(mineralMining('rock', 10, 70, 40)).toMatch('Invalid mineral name');
    });

    it('mineral name rock should diamond return Invalid mineral name', () => {
      expect(mineralMining('diamond', 10, 70, 40)).toMatch('Invalid mineral name');
    });
  });
});

describe('Mineral Mining Profit', () => {
  it('mineral name silver, mining power 33, duration 200, cost 30 should return Mineral mining profit 168', () => {
    expect(mineralMining('silver', 33, 200, 30)).toMatch('Mineral mining profit 168');
  });
  it('mineral name gold, mining power 50, duration 400, cost 150 should return Mineral mining profit 516.6666666666667', () => {
    expect(mineralMining('gold', 50, 400, 150)).toMatch('Mineral mining profit 516.6666666666667');
  });
  it('mineral name titanium, mining power 20, duration 350, cost 150 should return Mineral mining profit 40.90909090909091', () => {
    expect(mineralMining('titanium', 20, 350, 150)).toMatch('Mineral mining profit 40.90909090909091');
  });
});

// describe('Mineral mining at a loss', () => {
//   it('mineral name silver, mining power 33, duration 200, cost 30 should return Mineral mining at a loss 168', () => {
//     expect(mineralMining('silver', 33, 200, 30)).toMatch('Mineral mining at a loss 168');
//   });
// });
