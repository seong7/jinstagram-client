import React, { memo } from 'react';
import './Input.scss';

const Input = memo((props) => {
  // console.log(props.name);
  return <input {...props} />;
});

export default Input;
