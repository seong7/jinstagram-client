import React, { memo } from 'react';
import './Button.scss';

const Button = memo((props) => {
  return <button {...props}>{props.text}</button>;
});

export default Button;
