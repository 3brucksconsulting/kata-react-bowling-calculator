import * as formattor from '../formatter/formatter';


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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
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

    expect(formattor.formatFrames(frames)).toEqual(result);
  });
});
