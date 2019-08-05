import React from 'react';
import ReactTestRender from 'react-test-renderer';
import PinButtons from './pin-buttons';

describe('The PinButtons component', () => {
  it('givenOneAvailablePin_rendersAsExpected', () => {
    const nextAvailablePins = 1;
    const isGameOver = false;

    const component = ReactTestRender.create(
      <PinButtons
        nextAvailablePins={nextAvailablePins}
        isGameOver={isGameOver}
      />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenTwoAvailablePins_rendersAsExpected', () => {
    const nextAvailablePins = 2;
    const isGameOver = false;

    const component = ReactTestRender.create(
      <PinButtons
        nextAvailablePins={nextAvailablePins}
        isGameOver={isGameOver}
      />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenThreeAvailablePins_rendersAsExpected', () => {
    const nextAvailablePins = 3;
    const isGameOver = false;

    const component = ReactTestRender.create(
      <PinButtons
        nextAvailablePins={nextAvailablePins}
        isGameOver={isGameOver}
      />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenFourAvailablePins_rendersAsExpected', () => {
    const nextAvailablePins = 4;
    const isGameOver = false;

    const component = ReactTestRender.create(
      <PinButtons
        nextAvailablePins={nextAvailablePins}
        isGameOver={isGameOver}
      />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenFiveAvailablePins_rendersAsExpected', () => {
    const nextAvailablePins = 5;
    const isGameOver = false;

    const component = ReactTestRender.create(
      <PinButtons
        nextAvailablePins={nextAvailablePins}
        isGameOver={isGameOver}
      />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenSixAvailablePins_rendersAsExpected', () => {
    const nextAvailablePins = 6;
    const isGameOver = false;

    const component = ReactTestRender.create(
      <PinButtons
        nextAvailablePins={nextAvailablePins}
        isGameOver={isGameOver}
      />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenSevenAvailablePins_rendersAsExpected', () => {
    const nextAvailablePins = 7;
    const isGameOver = false;

    const component = ReactTestRender.create(
      <PinButtons
        nextAvailablePins={nextAvailablePins}
        isGameOver={isGameOver}
      />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenEightAvailablePins_rendersAsExpected', () => {
    const nextAvailablePins = 8;
    const isGameOver = false;

    const component = ReactTestRender.create(
      <PinButtons
        nextAvailablePins={nextAvailablePins}
        isGameOver={isGameOver}
      />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenNineAvailablePins_rendersAsExpected', () => {
    const nextAvailablePins = 9;
    const isGameOver = false;

    const component = ReactTestRender.create(
      <PinButtons
        nextAvailablePins={nextAvailablePins}
        isGameOver={isGameOver}
      />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenTenAvailablePins_rendersAsExpected', () => {
    const nextAvailablePins = 10;
    const isGameOver = false;

    const component = ReactTestRender.create(
      <PinButtons
        nextAvailablePins={nextAvailablePins}
        isGameOver={isGameOver}
      />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });

  it('givenIsGameOverTrue_rendersAsExpected', () => {
    const nextAvailablePins = 10;
    const isGameOver = true;

    const component = ReactTestRender.create(
      <PinButtons
        nextAvailablePins={nextAvailablePins}
        isGameOver={isGameOver}
      />
    );

    let result = component.toJSON();

    expect(result).toMatchSnapshot();
  });
});
