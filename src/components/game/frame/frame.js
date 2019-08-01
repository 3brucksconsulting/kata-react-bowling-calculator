import React from 'react';
import './frame.css';

const Frame = props => {
  return (
    <div className='frame'>
      <div className='frame-header'>{props.frameNumber}</div>
      <div className={'frame-rolls'}>
        <div
          className={
            props.frameNumber === 10
              ? 'frame-tenth-first-roll'
              : 'frame-first-roll'
          }
        >
          {props.formattedFrame[0]}
        </div>
        <div
          className={
            props.frameNumber === 10
              ? 'frame-tenth-second-roll'
              : 'frame-second-roll'
          }
        >
          {props.formattedFrame[1]}
        </div>
        {props.frameNumber === 10 ? (
          <div className='frame-tenth-third-roll'>
            {props.formattedFrame[2]}
          </div>
        ) : null}
      </div>
      <div className={'frame-total' + (props.active ? ' active-frame' : '')}>
        {props.score}
      </div>
    </div>
  );
};

export default Frame;
