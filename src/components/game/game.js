import React from 'react';
import * as formatter from '../../utils/formatter/formatter';
import './game.css';
import '../../bootstrap.min.css';

const Game = props => {
  const formattedFrames = formatter.formatFrames(props.frames);

  return (
    <div className='row game'>
      <div className='col-md-12'>
        <div className='frame-one'>
          <div className='frame-header'>1</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>{formattedFrames[0][0]}</div>
            <div className='frame-second-roll'>{formattedFrames[0][1]}</div>
          </div>
          <div className='frame-total'>{props.scores[0]}</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>2</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>{formattedFrames[1][0]}</div>
            <div className='frame-second-roll'>{formattedFrames[1][1]}</div>
          </div>
          <div className='frame-total'>{props.scores[1]}</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>3</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>{formattedFrames[2][0]}</div>
            <div className='frame-second-roll'>{formattedFrames[2][1]}</div>
          </div>
          <div className='frame-total'>{props.scores[2]}</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>4</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>{formattedFrames[3][0]}</div>
            <div className='frame-second-roll'>{formattedFrames[3][1]}</div>
          </div>
          <div className='frame-total'>{props.scores[3]}</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>5</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>{formattedFrames[4][0]}</div>
            <div className='frame-second-roll'>{formattedFrames[4][1]}</div>
          </div>
          <div className='frame-total'>{props.scores[4]}</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>6</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>{formattedFrames[5][0]}</div>
            <div className='frame-second-roll'>{formattedFrames[5][1]}</div>
          </div>
          <div className='frame-total'>{props.scores[5]}</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>7</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>{formattedFrames[6][0]}</div>
            <div className='frame-second-roll'>{formattedFrames[6][1]}</div>
          </div>
          <div className='frame-total'>{props.scores[6]}</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>8</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>{formattedFrames[7][0]}</div>
            <div className='frame-second-roll'>{formattedFrames[7][1]}</div>
          </div>
          <div className='frame-total'>{props.scores[7]}</div>
        </div>

        <div className='frame'>
          <div className='frame-header'>9</div>
          <div className='frame-rolls'>
            <div className='frame-first-roll'>{formattedFrames[8][0]}</div>
            <div className='frame-second-roll'>{formattedFrames[8][1]}</div>
          </div>
          <div className='frame-total'>{props.scores[8]}</div>
        </div>

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
