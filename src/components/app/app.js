import React from 'react';
import PinButtons from '../pin-buttons/pin-buttons';
import Game from '../game/game';
import * as calculator from '../../utils/calculator/calculator';
import '../../bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      frames: [],
      nextAvailablePins: 10,
    };

    this.handlePinButtonClick = this.handlePinButtonClick.bind(this);
    this.handleStartNewGameClick = this.handleStartNewGameClick.bind(this);
  }

  handlePinButtonClick(event) {
    const roll = Number(event.target.value);
    const frames = calculator.addRoll(this.state.frames, roll);
    const nextAvailablePins = calculator.calculateNextAvailablePins(frames);
    
    console.log('roll: ', roll);
    console.log('frames: ', frames);
    console.log('nextAvailablePins: ', nextAvailablePins);

    this.setState({
      frames: frames,
      nextAvailablePins: nextAvailablePins,
    });
  }

  handleStartNewGameClick(event) {
    console.log("Start New Game");

    this.setState({
      frames: [],
      nextAvailablePins: 10,
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <PinButtons
          nextAvailablePins={this.state.nextAvailablePins}
          handlePinButtonClick={this.handlePinButtonClick}
          handleStartNewGameClick={this.handleStartNewGameClick}
        />
        <Game frames={this.state.frames} />
      </div>
    );
  }
}

export default App;
