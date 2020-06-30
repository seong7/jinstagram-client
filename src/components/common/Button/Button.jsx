import React, { memo } from 'react';
import './Button.scss';

const Button = memo((props) => {
  return (
    <button
      className={`${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
});

export default Button;
