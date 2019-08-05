import React from 'react';
import ReactTestRender from 'react-test-renderer';
import Game from './game';

describe('The Game component', () => {
  it('givenNewGame_rendersAsExpected', () => {
    const frames = [];
    const currentFrame = 1;
    const scores = [];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenFirstRollEight_rendersAsExpected', () => {
    const frames = [[8]];
    const currentFrame = 1;
    const scores = [];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenSecondRollOne_rendersAsExpected', () => {
    const frames = [[8, 1]];
    const currentFrame = 2;
    const scores = [9];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenThirdRollMiss_rendersAsExpected', () => {
    const frames = [[8, 1], [0]];
    const currentFrame = 2;
    const scores = [9];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenFourthRollNine_rendersAsExpected', () => {
    const frames = [[8, 1], [0, 9]];
    const currentFrame = 3;
    const scores = [9, 18];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenFifthRollEight_rendersAsExpected', () => {
    const frames = [[8, 1], [0, 9], [8]];
    const currentFrame = 3;
    const scores = [9, 18];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenSixthRollSpare_rendersAsExpected', () => {
    const frames = [[8, 1], [0, 9], [8, 2]];
    const currentFrame = 4;
    const scores = [9, 18];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenSeventhRollStrike_rendersAsExpected', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10]];
    const currentFrame = 5;
    const scores = [9, 18, 38];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenEighthRollNine_rendersAsExpected', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10], [9]];
    const currentFrame = 5;
    const scores = [9, 18, 38];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenNinthRollMiss_rendersAsExpected', () => {
    const frames = [[8, 1], [0, 9], [8, 2], [10], [9, 0]];
    const currentFrame = 6;
    const scores = [9, 18, 38, 57, 66];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenTenthFrameFirstRollMiss_rendersAsExpected', () => {
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
    const currentFrame = 10;
    const scores = [9, 18, 38, 57, 66, 84, 92, 108, 116];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenTenthFrameFirstRollEight_rendersAsExpected', () => {
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
    const currentFrame = 10;
    const scores = [9, 18, 38, 57, 66, 84, 92, 108, 116];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenTenthFrameFirstRollStrike_rendersAsExpected', () => {
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
    const currentFrame = 10;
    const scores = [9, 18, 38, 57, 66, 84, 92, 108, 116];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenTenthFrameSecondRollMiss_rendersAsExpected', () => {
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
    const currentFrame = 10;
    const scores = [9, 18, 38, 57, 66, 84, 92, 108, 116, 124];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenTenthFrameSecondRollOne_rendersAsExpected', () => {
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
    const currentFrame = 10;
    const scores = [9, 18, 38, 57, 66, 84, 92, 108, 116, 125];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenTenthFrameSecondRollSpare_rendersAsExpected', () => {
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
    const currentFrame = 10;
    const scores = [9, 18, 38, 57, 66, 84, 92, 108, 116];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenTenthFrameSecondRollStrike_rendersAsExpected', () => {
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
    const currentFrame = 10;
    const scores = [9, 18, 38, 57, 66, 84, 92, 108, 116];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenTenthFrameThirdRollMiss_rendersAsExpected', () => {
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
    const currentFrame = 10;
    const scores = [9, 18, 38, 57, 66, 84, 92, 108, 116, 126];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenTenthFrameThirdRollNine_rendersAsExpected', () => {
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
    const currentFrame = 10;
    const scores = [9, 18, 38, 57, 66, 84, 92, 108, 116, 135];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenTenthFrameThirdRollSpare_rendersAsExpected', () => {
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
      [8, 8, 2]
    ];
    const currentFrame = 10;
    const scores = [9, 18, 38, 57, 66, 84, 92, 108, 116, 136];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenTenthFrameThirdRollStrike_rendersAsExpected', () => {
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
    const currentFrame = 10;
    const scores = [9, 18, 38, 57, 66, 84, 92, 108, 116, 136];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenMissGame_rendersAsExpected', () => {
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
    const currentFrame = 10;
    const scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenPerfectGame_rendersAsExpected', () => {
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
    const currentFrame = 10;
    const scores = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300];

    const component = ReactTestRender.create(
      <Game frames={frames} currentFrame={currentFrame} scores={scores} />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });
});
