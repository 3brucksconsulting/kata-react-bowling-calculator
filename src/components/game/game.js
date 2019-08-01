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
        {[...Array(10).keys()].map(i => (
          <Frame
            key={i}
            frameNumber={i + 1}
            formattedFrame={formattedFrames[i]}
            score={props.scores[i]}
            active={(i + 1) === props.currentFrame}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
