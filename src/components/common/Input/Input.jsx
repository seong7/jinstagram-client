import React, { memo, forwardRef } from 'react';
import './Input.scss';

const Input = memo(
  forwardRef((props, ref) => {
    return (
      <input
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        required={props.required}
        maxLength={props.maxLength}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        className={`input ${props.className}`}
        ref={ref}
      />
    );
  })
);

export default Input;
