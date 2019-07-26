import React from 'react';
import Frame from './frame/frame';
import * as formatter from '../../utils/formatter/formatter';
import './game.css';
import '../../bootstrap.min.css';

const Game = props => {
  const formattedFrames = formatter.formatFrames(props.frames);

  return (
    <div className='row game'>
      <div className='col-md-12'>
        {[...Array(9).keys()].map(i => (
          <Frame
            frameNumber={i + 1}
            formattedFrame={formattedFrames[i]}
            score={props.scores[i]}
            active={"true"}
          />
        ))}

        <div className='frame'>
          <div className='frame-header'>10</div>
          <div className='frame-rolls'>
            <div className='frame-tenth-first-roll'>
              {formattedFrames[9][0]}
            </div>
            <div className='frame-tenth-second-roll'>
              {formattedFrames[9][1]}
            </div>
            <div className='frame-tenth-third-roll'>
              {formattedFrames[9][2]}
            </div>
          </div>
          <div className='frame-total'>{props.scores[9]}</div>
        </div>
      </div>
    </div>
  );
};

export default Game;
