import React from 'react';
import PinButtons from '../pin-buttons/pin-buttons';
import Game from '../game/game';
import * as calculator from '../../utils/calculator/calculator';
import '../../bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentFrame: 1,
      frames: [],
      isGameOver: false,
      nextAvailablePins: 10,
      scores: []
    };

    this.handlePinButtonClick = this.handlePinButtonClick.bind(this);
    this.handleStartNewGameClick = this.handleStartNewGameClick.bind(this);
  }

  handlePinButtonClick(event) {
    const roll = Number(event.target.value);
    const frames = calculator.addRoll(this.state.frames, roll);
    const nextAvailablePins = calculator.calculateNextAvailablePins(frames);
    const scores = calculator.calculateScores(frames);
    const isGameOver = scores.length === 10;

    console.log('roll: ', roll);
    console.log('currentFrame: ', this.state.currentFrame);
    console.log('frames: ', frames);
    console.log('isGameOver: ', isGameOver);
    console.log('nextAvailablePins: ', nextAvailablePins);
    console.log('scores: ', scores);

    this.setState({
      frames: frames,
      isGameOver: isGameOver,
      nextAvailablePins: nextAvailablePins,
      scores: scores
    });
  }

  handleStartNewGameClick(event) {
    console.log('Start New Game');

    this.setState({
      currentFrame: 1,
      frames: [],
      isGameOver: false,
      nextAvailablePins: 10,
      scores: []
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <PinButtons
          isGameOver={this.state.isGameOver}
          nextAvailablePins={this.state.nextAvailablePins}
          handlePinButtonClick={this.handlePinButtonClick}
          handleStartNewGameClick={this.handleStartNewGameClick}
        />
        <Game
          currentFrame={this.state.currentFrame}
          frames={this.state.frames}
          scores={this.state.scores}
        />
      </div>
    );
  }
}

export default App;
