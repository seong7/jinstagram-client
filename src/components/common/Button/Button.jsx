import React, { memo, useEffect, useState } from 'react';
import ReactIcon from '../ReactIcon/ReactIcon';
import './Button.scss';

const Button = memo((props) => {
  const [text, setText] = useState(null);

  // loader 인지 아닌지 판단
  useEffect(() => {
    if (props.isLoading) {
      setText(
        <span className='loader'>
          <ReactIcon icon='AiOutlineLoading' />
        </span>
      );
    } else if (!props.isLoading) {
      setText(<span>{props.text}</span>);
    }
  }, [props.isLoading, props.text]);

  return (
    <button
      className={`${props.className}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {text}
    </button>
  );
});

export default Button;
