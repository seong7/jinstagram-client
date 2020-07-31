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
        {props.text /* Toggle UI 의 Icon 이 들어가는 곳 */}
      </label>
    </>
  );
};

export default Toggle;
