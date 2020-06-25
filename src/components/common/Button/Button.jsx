import React, { memo } from 'react';
import './Button.scss';
import { useEffect } from 'react';
import { useState } from 'react';

const Button = memo((props) => {
  const [type, setType] = useState(null);

  useEffect(() => {
    if (props.isError) {
      setType('error');
    } else if (props.isAuthorized) {
      setType('authorized');
    }
  }, [props]);

  return (
    <button className={`${props.className} ${type}`} type={props.type}>
      {props.text}
    </button>
  );
});

export default Button;
