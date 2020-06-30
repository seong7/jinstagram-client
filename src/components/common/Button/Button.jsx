import React, { memo } from 'react';
import './Button.scss';
import { useEffect } from 'react';
import { useState } from 'react';

const Button = memo((props) => {
  const [style, setStyle] = useState('');

  // useEffect(() => {
  //   if (props.isError) {
  //     setStyle('border-red');
  //   }
  // }, [props.isError]);

  return (
    <button
      className={`${props.className} ${style}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
});

export default Button;
