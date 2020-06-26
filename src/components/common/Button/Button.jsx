import React, { memo } from 'react';
import './Button.scss';
import { useEffect } from 'react';
import { useState } from 'react';

const Button = memo((props) => {
  const [style, setStyle] = useState(null);

  useEffect(() => {
    if (props.isError) {
      setStyle('error');
    } else if (props.isAuthorized) {
      setStyle('authorized');
    }
  }, [props.isError, props.isAuthorized]);

  return (
    <button className={`${props.className} ${style}`} type={props.type}>
      {props.text}
    </button>
  );
});

export default Button;
