import React from 'react';
import './Toggle.scss';

const Toggle = (props) => {
  return (
    <>
      <input
        type='checkbox'
        id='switch'
        className='toggle'
        onChange={props.onChange}
      />
      <label htmlFor='switch' className='toggle-label'>
        Toggle
      </label>
    </>
  );
};

export default Toggle;
