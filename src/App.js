import React from 'react';
import PinButtons from './pin_buttons';
import * as calculator from './calculator';
import './bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      frames: [],
      nextAvailablePins: 10,
    };

    this.handlePinButtonClick = this.handlePinButtonClick.bind(this);
  }

  handlePinButtonClick(event) {
    let roll = Number(event.target.value);
    let frames = calculator.addRoll(this.state.frames, roll);
    let nextAvailablePins = calculator.calculateNextAvailablePins(frames);
    
    console.log('roll: ', roll);
    console.log('frames: ', frames);
    console.log('nextAvailablePins: ', nextAvailablePins);

    this.setState({
      frames: frames,
      nextAvailablePins: nextAvailablePins,
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <PinButtons
          nextAvailablePins={this.state.nextAvailablePins}
          onClick={this.handlePinButtonClick}
        />
      </div>
    );
  }
}

export default App;
