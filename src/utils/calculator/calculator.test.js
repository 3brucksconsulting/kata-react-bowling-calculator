import * as calculator from './calculator';

describe('addRoll', () => {
  it('givenNewGameWithFirstRollEight_returnsFirstFrameWithEight', () => {
    const frames = [];
    const roll = 8;
    const result = [[8]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenSecondRollOne_returnsFirstFrameWithEightOne', () => {
    const frames = [[8]];
    const roll = 1;
    const result = [[8, 1]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenThirdRollMiss_returnsSecondFrameWithMiss', () => {
    const frames = [[8, 1]];
    const roll = 0;
    const result = [[8, 1], [0]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenFourthRollNine_returnsSecondFrameWithMissNine', () => {
    const frames = [[8, 1], [0]];
    const roll = 9;
    const result = [[8, 1], [0, 9]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenFifthRollEight_returnsThirdFrameWithEight', () => {
    const frames = [[8, 1], [0, 9]];
    const roll = 8;
    const result = [[8, 1], [0, 9], [8]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenSixthRollSpare_returnsThirdFrameWithEightSpare', () => {
    const frames = [[8, 1], [0, 9], [8]];
    const roll = 2;
    const result = [[8, 1], [0, 9], [8, 2]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenSeventhRollStrike_returnsFourthFrameWithStrike', () => {
    const frames = [[8, 1], [0, 9], [8, 2]];
    const roll = 10;
    const result = [[8, 1], [0, 9], [8, 2], [10]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenEighthRollNine_returnsFifthFrameWithNine', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10]];
    const roll = 9;
    const result = [[8, 1], [0, 9], [8, 2], [10], [9]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenNinthRollMiss_returnsFifthFrameWithNineMiss', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10], [9]];
    const roll = 0;
    const result = [[8, 1], [0, 9], [8, 2], [10], [9, 0]];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameFirstRollMiss_returnsTenthFrameWithMiss', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2]
    ];
    const roll = 0;
    const result = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [0]
    ];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameFirstRollEight_returnsTenthFrameWithEight', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2]
    ];
    const roll = 8;
    const result = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8]
    ];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameFirstRollStrike_returnsTenthFrameWithStrike', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2]
    ];
    const roll = 10;
    const result = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10]
    ];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameSecondRollMiss_returnsTenthFrameWithEightMiss', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8]
    ];
    const roll = 0;
    const result = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 0]
    ];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameSecondRollOne_returnsTenthFrameWithEightOne', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8]
    ];
    const roll = 1;
    const result = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 1]
    ];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameSecondRollSpare_returnsTenthFrameWithEightSpare', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8]
    ];
    const roll = 2;
    const result = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2]
    ];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameSecondRollStrike_returnsTenthFrameWithStrikeStrike', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10]
    ];
    const roll = 10;
    const result = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10, 10]
    ];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameThirdRollMiss_returnsTenthFrameWithEightSpareMiss', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2]
    ];
    const roll = 0;
    const result = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2, 0]
    ];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameThirdRollNine_returnsTenthFrameWithEightSpareNine', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2]
    ];
    const roll = 9;
    const result = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2, 9]
    ];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameThirdRollSpare_returnsTenthFrameWithStrikeEightSpare', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10, 8]
    ];
    const roll = 2;
    const result = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10, 8, 2]
    ];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenTenthFrameThirdRollStrike_returnsTenthFrameWithEightSpareStrike', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2]
    ];
    const roll = 10;
    const result = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2, 10]
    ];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenMissGame_returnsAllMisses', () => {
    const frames = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0]
    ];
    const roll = 0;
    const result = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });

  it('givenPerfectGame_returnsAllStrikes', () => {
    const frames = [
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10, 10]
    ];
    const roll = 10;
    const result = [
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10, 10, 10]
    ];

    expect(calculator.addRoll(frames, roll)).toEqual(result);
  });
});

describe('calculateNextAvailablePins', () => {
  it('givenNewGameWithFirstRollEight_returnsTwo', () => {
    const frames = [[8]];
    const result = 2;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenSecondRollOne_returnsTen', () => {
    const frames = [[8, 1]];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenThirdRollMiss_returnsTen', () => {
    const frames = [[8, 1], [0]];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenFourthRollNine_returnsTen', () => {
    const frames = [[8, 1], [0, 9]];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenFifthRollEight_returnsTwo', () => {
    const frames = [[8, 1], [0, 9], [8]];
    const result = 2;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenSixthRollSpare_returnsThirdFrameWithEightSpare', () => {
    const frames = [[8, 1], [0, 9], [8, 2]];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenSeventhRollStrike_returnsTen', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10]];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenEighthRollNine_returnsOne', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10], [9]];
    const result = 1;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenNinthRollMiss_returnsTen', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10], [9, 0]];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenTenthFrameFirstRollMiss_returnsTen', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [0]
    ];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenTenthFrameFirstRollEight_returnsTwo', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8]
    ];
    const result = 2;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenTenthFrameFirstRollStrike_returnsTen', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10]
    ];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenTenthFrameSecondRollMiss_returnsTen', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 0]
    ];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenTenthFrameSecondRollOne_returnsTen', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 1]
    ];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenTenthFrameSecondRollSpare_returnsTen', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2]
    ];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenTenthFrameSecondRollStrike_returnsTen', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10, 10]
    ];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenTenthFrameThirdRollMiss_returnsTen', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2, 0]
    ];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenTenthFrameThirdRollNine_returnsTen', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2, 9]
    ];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenTenthFrameThirdRollSpare_returnsTen', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10, 8, 2]
    ];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenTenthFrameThirdRollStrike_returnsTen', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2, 10]
    ];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenMissGame_returnsTen', () => {
    const frames = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });

  it('givenPerfectGame_returnsAllStrikes', () => {
    const frames = [
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10, 10, 10]
    ];
    const result = 10;

    expect(calculator.calculateNextAvailablePins(frames)).toEqual(result);
  });
});

describe('calculateScores', () => {
  it('givenNewGame_returnsNoScores', () => {
    const frames = [];
    const result = [];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenNewGameWithFirstRollEight_returnsNoScores', () => {
    const frames = [[8]];
    const result = [];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenSecondRollOne_returnsFirstFrameWithNine', () => {
    const frames = [[8, 1]];
    const result = [9];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenThirdRollMiss_returnsFirstFrameWithNine', () => {
    const frames = [[8, 1], [0]];
    const result = [9];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenFourthRollNine_returnsSecondFrameWith18', () => {
    const frames = [[8, 1], [0, 9]];
    const result = [9, 18];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenFifthRollEight_returnsSecondFrameWith18', () => {
    const frames = [[8, 1], [0, 9], [8]];
    const result = [9, 18];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenSixthRollSpare_returnsSecondFrameWith18', () => {
    const frames = [[8, 1], [0, 9], [8, 2]];
    const result = [9, 18];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenSeventhRollStrike_returnsThirdFrameWith38', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10]];
    const result = [9, 18, 38];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenEighthRollNine_returnsThirdFrameWith38', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10], [9]];
    const result = [9, 18, 38];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenNinthRollMiss_returnsFifthFrameWith66', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10], [9, 0]];
    const result = [9, 18, 38, 57, 66];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenTenthFrameFirstRollMiss_returnsNinthFrameWith116', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [0]
    ];
    const result = [9, 18, 38, 57, 66, 84, 92, 108, 116];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenTenthFrameFirstRollEight_returnsNinthFrameWith116', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8]
    ];
    const result = [9, 18, 38, 57, 66, 84, 92, 108, 116];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenTenthFrameFirstRollStrike_returnsNinthFrameWith116', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10]
    ];
    const result = [9, 18, 38, 57, 66, 84, 92, 108, 116];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenTenthFrameSecondRollMiss_returnsTenthFrameWith124', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 0]
    ];
    const result = [9, 18, 38, 57, 66, 84, 92, 108, 116, 124];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenTenthFrameSecondRollOne_returnsTenthFrameWith125', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 1]
    ];
    const result = [9, 18, 38, 57, 66, 84, 92, 108, 116, 125];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenTenthFrameSecondRollSpare_returnsNinthFrameWith116', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2]
    ];
    const result = [9, 18, 38, 57, 66, 84, 92, 108, 116];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenTenthFrameSecondRollStrike_returnsNinthFrameWith116', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10, 10]
    ];
    const result = [9, 18, 38, 57, 66, 84, 92, 108, 116];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenTenthFrameThirdRollMiss_returnsTenthFrameWith126', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2, 0]
    ];
    const result = [9, 18, 38, 57, 66, 84, 92, 108, 116, 126];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenTenthFrameThirdRollNine_returnsTenthFrameWith135', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2, 9]
    ];
    const result = [9, 18, 38, 57, 66, 84, 92, 108, 116, 135];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenTenthFrameThirdRollSpare_returnsTenthFrameWith136', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10, 8, 2]
    ];
    const result = [9, 18, 38, 57, 66, 84, 92, 108, 116, 136];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenTenthFrameThirdRollStrike_returnsTenthFrameWith136', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2, 10]
    ];
    const result = [9, 18, 38, 57, 66, 84, 92, 108, 116, 136];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenMissGame_returnsTenthFrameWithZero', () => {
    const frames = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ];
    const result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });

  it('givenPerfectGame_returnsTenthFrameWith300', () => {
    const frames = [
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10, 10, 10]
    ];
    const result = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300];

    expect(calculator.calculateScores(frames)).toEqual(result);
  });
});

describe('formatFrames', () => {
  it('givenNewGame_returnsNoRolls', () => {
    const frames = [];
    const result = [
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', '', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenNewGameWithFirstRollEight_returnsFirstFrameWithEight', () => {
    const frames = [[8]];
    const result = [
      [8, ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', '', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenSecondRollOne_returnsFirstFrameWithEightOne', () => {
    const frames = [[8, 1]];
    const result = [
      [8, 1],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', '', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenThirdRollMiss_returnsSecondFrameWithMiss', () => {
    const frames = [[8, 1], [0]];
    const result = [
      [8, 1],
      ['-', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', '', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenFourthRollNine_returnsSecondFrameWithMissNine', () => {
    const frames = [[8, 1], [0, 9]];
    const result = [
      [8, 1],
      ['-', 9],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', '', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenFifthRollEight_returnsThirdFrameWithEight', () => {
    const frames = [[8, 1], [0, 9], [8]];
    const result = [
      [8, 1],
      ['-', 9],
      [8, ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', '', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenSixthRollSpare_returnsThirdFrameWithEightSpare', () => {
    const frames = [[8, 1], [0, 9], [8, 2]];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', '', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenSeventhRollStrike_returnsFourthFrameWithStrike', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10]];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', '', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenEighthRollNine_returnsFifthFrameWithNine', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10], [9]];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      [9, ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', '', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenNinthRollMiss_returnsFifthFrameWithNineMiss', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10], [9, 0]];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      [9, '-'],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
      ['', '', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenTenthFrameFirstRollMiss_returnsTenthFrameWithMiss', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [0]
    ];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      [9, '-'],
      [7, '/'],
      [8, '-'],
      [7, '/'],
      [6, 2],
      ['-', '', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenTenthFrameFirstRollEight_returnsTenthFrameWithEight', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8]
    ];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      [9, '-'],
      [7, '/'],
      [8, '-'],
      [7, '/'],
      [6, 2],
      [8, '', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenTenthFrameFirstRollStrike_returnsTenthFrameWithStrike', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10]
    ];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      [9, '-'],
      [7, '/'],
      [8, '-'],
      [7, '/'],
      [6, 2],
      ['X', '', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenTenthFrameSecondRollMiss_returnsTenthFrameWithEightMiss', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 0]
    ];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      [9, '-'],
      [7, '/'],
      [8, '-'],
      [7, '/'],
      [6, 2],
      [8, '-', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenTenthFrameSecondRollOne_returnsTenthFrameWithEightOne', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 1]
    ];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      [9, '-'],
      [7, '/'],
      [8, '-'],
      [7, '/'],
      [6, 2],
      [8, 1, '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenTenthFrameSecondRollSpare_returnsTenthFrameWithEightSpare', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2]
    ];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      [9, '-'],
      [7, '/'],
      [8, '-'],
      [7, '/'],
      [6, 2],
      [8, '/', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenTenthFrameSecondRollStrike_returnsTenthFrameWithStrikeStrike', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10, 10]
    ];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      [9, '-'],
      [7, '/'],
      [8, '-'],
      [7, '/'],
      [6, 2],
      ['X', 'X', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenTenthFrameThirdRollMiss_returnsTenthFrameWithEightSpareMiss', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2, 0]
    ];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      [9, '-'],
      [7, '/'],
      [8, '-'],
      [7, '/'],
      [6, 2],
      [8, '/', '-']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenTenthFrameThirdRollNine_returnsTenthFrameWithEightSpareNine', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2, 9]
    ];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      [9, '-'],
      [7, '/'],
      [8, '-'],
      [7, '/'],
      [6, 2],
      [8, '/', 9]
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenTenthFrameThirdRollSpare_returnsTenthFrameWithStrikeEightSpare', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [10, 8, 2]
    ];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      [9, '-'],
      [7, '/'],
      [8, '-'],
      [7, '/'],
      [6, 2],
      ['X', 8, '/']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenTenthFrameThirdRollStrike_returnsTenthFrameWithEightSpareStrike', () => {
    const frames = [
      [8, 1],
      [0, 9],
      [8, 2],
      [10],
      [9, 0],
      [7, 3],
      [8, 0],
      [7, 3],
      [6, 2],
      [8, 2, 10]
    ];
    const result = [
      [8, 1],
      ['-', 9],
      [8, '/'],
      ['', 'X'],
      [9, '-'],
      [7, '/'],
      [8, '-'],
      [7, '/'],
      [6, 2],
      [8, '/', 'X']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenMissGame_returnsAllMisses', () => {
    const frames = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ];
    const result = [
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-'],
      ['-', '-', '']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });

  it('givenPerfectGame_returnsAllStrikes', () => {
    const frames = [
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10, 10, 10]
    ];
    const result = [
      ['', 'X'],
      ['', 'X'],
      ['', 'X'],
      ['', 'X'],
      ['', 'X'],
      ['', 'X'],
      ['', 'X'],
      ['', 'X'],
      ['', 'X'],
      ['X', 'X', 'X']
    ];

    expect(calculator.formatFrames(frames)).toEqual(result);
  });
});
