import React from 'react';
import * as calculator from './calculator';
import './bootstrap.min.css';
import './game.css';

const Game = props => {
  const scores = calculator.calculateScores(props.frames);

  return (
    <div className='row game'>
      <div className='col-md-12'>
        {scores.map(score => (
          <div>{score}</div>
        ))}
      </div>
    </div>
  );
};

export default Game;
