import * as calculator from './calculator';

describe('addRoll', () => {
  it('givenNewGameWithFirstRollSix_returnsFirstFrameWithFirstRollSix', () => {
    const frames = [];
    const roll = 6;
    const result = [[6]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenSecondRollThree_returnsFirstFrameWithSecondRollThree', () => {
    const frames = [[6]];
    const roll = 3;
    const result = [[6, 3]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenThirdRollStrike_returnsSecondFrameWithFirstRollStrike', () => {
    const frames = [[6, 3]];
    const roll = 10;
    const result = [[6, 3], [10]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenFourthRollNine_returnsThirdFrameWithFirstRollNine', () => {
    const frames = [[6, 3], [10]];
    const roll = 9;
    const result = [[6, 3], [10], [9]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenFifthRollSpare_returnsThirdFrameWithSecondRollSpare', () => {
    const frames = [[6, 3], [10], [9]];
    const roll = 1;
    const result = [[6, 3], [10], [9, 1]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenSixthRollEight_returnsFourthFrameWithFirstRollEight', () => {
    const frames = [[6, 3], [10], [9, 1]];
    const roll = 8;
    const result = [[6, 3], [10], [9, 1], [8]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameFirstRollEight_returnsTenthFrameWithFirstRollEight', () => {
    const frames = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1]];
    const roll = 8;
    const result = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [8]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameSecondRollOne_returnsTenthFrameWithSecondRollOne', () => {
    const frames = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [8]];
    const roll = 1;
    const result = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [8, 1]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameSecondRollSpare_returnsTenthFrameWithSecondRollSpare', () => {
    const frames = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [8]];
    const roll = 2;
    const result = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [8, 2]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameThirdRollNine_returnsTenthFrameWithThirdRollNine', () => {
    const frames = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [8, 2]];
    const roll = 9;
    const result = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [8, 2, 9]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameFirstRollStrike_returnsTenthFrameWithFirstRollStrike', () => {
    const frames = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1]];
    const roll = 10;
    const result = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [10]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameSecondRollNine_returnsTenthFrameWithSecondRollNine', () => {
    const frames = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [10]];
    const roll = 9;
    const result = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [10, 9]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameThirdRollSpare_returnsTenthFrameWithThirdRollSpare', () => {
    const frames = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [10, 9]];
    const roll = 1;
    const result = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [10, 9, 1]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameSecondRollStrike_returnsTenthFrameWithSecondRollStrike', () => {
    const frames = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [10]];
    const roll = 10;
    const result = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [10, 10]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameThirdRollStrike_returnsTenthFrameWithThirdRollStrike', () => {
    const frames = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [10, 10]];
    const roll = 10;
    const result = [[6, 3], [10], [9, 1], [8, 2], [9, 0], [10], [10], [8, 0], [9, 1], [10, 10, 10]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });
});

describe('calculateNextAvailablePins', () => {
  it('givenNewGameWithFirstRollSix_returnsFour', () => {
    const frames = [[6]];
    const result = 4;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenSecondRollThree_returnsTen', () => {
    const frames = [[6, 3]];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenThirdRollStrike_returnsTen', () => {
    const frames = [[6, 3], [10]];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenFourthRollNine_returnsOne', () => {
    const frames = [[6, 3], [10], [9]];
    const result = 1;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenFifthRollSpare_returnsTen', () => {
    const frames = [[6, 3], [10], [9, 1]];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenSixthRollEight_returnsTwo', () => {
    const frames = [[6, 3], [10], [9, 1], [8]];
    const result = 2;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });
});
