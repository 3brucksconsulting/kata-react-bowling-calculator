import React from 'react';
import './bootstrap.min.css';
import './pin_buttons.css';

const PinButtons = props => {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <h5>Click the Number of Pins Knocked Down</h5>
        <div className='btn-toolbar'>
          {[...Array(props.nextAvailablePins + 1).keys()].map(x => (
            <button
              className='btn btn-outline-dark'
              key={x}
              type='button'
              value={x}
              onClick={props.onClick}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PinButtons;
