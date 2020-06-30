import React, { memo, forwardRef } from 'react';
import './Input.scss';

const Input = memo(
  forwardRef((props, ref) => {
    return (
      <input {...props} className={`input ${props.className}`} ref={ref} />
    );
  })
);

export default Input;
