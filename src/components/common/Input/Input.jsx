import React, { memo, useRef, useEffect } from 'react';
import './Input.scss';

const Input = memo((props) => {
  const inputEl = useRef(null);

  useEffect(() => {
    if(props.focus === 'true') inputEl.current.focus();
  })
  // console.log(props.name);
  return <input {...props} ref={inputEl} />;
});

export default Input;
