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
        checked={props.isChecked}
      />
      <label htmlFor='switch' className='toggle-label'>
        {props.text}
      </label>
    </>
  );
};

export default Toggle;
