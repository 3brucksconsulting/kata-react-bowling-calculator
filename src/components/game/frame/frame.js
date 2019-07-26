import React from 'react';
import './frame.css';

const Frame = props => {
  return (
    <div className='frame'>
      <div className='frame-header'>{props.frameNumber}</div>
      <div className={'frame-rolls'}>
        <div className='frame-first-roll'>{props.formattedFrame[0]}</div>
        <div className='frame-second-roll'>{props.formattedFrame[1]}</div>
      </div>
      <div className={'frame-total' + (props.active ? ' active-frame' : '')}>
        {props.score}
      </div>
    </div>
  );
};

export default Frame;
