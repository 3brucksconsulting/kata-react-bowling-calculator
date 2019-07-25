import React from 'react';
import * as calculator from './calculator';
import './bootstrap.min.css';
import './game.css';

const Game = props => {
  const scores = calculator.calculateScores(props.frames);

  return (
    <div className='row game'>
      <div className='col-md-12'>
        <div className='frame-one'>
          <div className='frame-header'>1</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>6</div>
            <div className='frame-second-roll'>3</div>
          </div>
          <div className='frame-total'>9</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>2</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'></div>
            <div className='frame-second-roll'>X</div>
          </div>
          <div className='frame-total'>29</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>3</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>9</div>
            <div className='frame-second-roll'>1</div>
          </div>
          <div className='frame-total'>47</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>4</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>8</div>
            <div className='frame-second-roll'>/</div>
          </div>
          <div className='frame-total'>66</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>5</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>9</div>
            <div className='frame-second-roll'>0</div>
          </div>
          <div className='frame-total'>75</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>6</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'></div>
            <div className='frame-second-roll'>X</div>
          </div>
          <div className='frame-total'>103</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>7</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'></div>
            <div className='frame-second-roll'>X</div>
          </div>
          <div className='frame-total'>121</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>8</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>8</div>
            <div className='frame-second-roll'>0</div>
          </div>
          <div className='frame-total'>129</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>9</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>9</div>
            <div className='frame-second-roll'>/</div>
          </div>
          <div className='frame-total'>149</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>10</div>
          <div className='frame-rolls'>
            <div className='frame-tenth-first-roll'>X</div>
            <div className='frame-tenth-second-roll'>X</div>
            <div className='frame-tenth-third-roll'>X</div>
          </div>
          <div className='frame-total'>179</div>
        </div>
        
        {scores.map(score => (
          <div key={score}>{score}</div>
        ))}
      </div>
    </div>
  );
};

export default Game;
