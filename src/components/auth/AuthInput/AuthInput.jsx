import React, { useEffect, useState, memo, createRef } from 'react';
import { ReactIcon, Input } from '../../common';
import './AuthInput.scss';

const AuthInput = memo((props) => {
  const input = createRef(null);
  const [boxShadow, setBoxShadow] = useState('');

  useEffect(() => {
    if (props.focus) {
      input.current.focus();
    }
  }, [props.focus, input]);

  return (
    <span
      className={`input auth__input-wrapper ${props.className} ${boxShadow}`}
    >
      <span className={'auth__input-icon-wrapper'}>
        <ReactIcon icon={props.prefixIcon} />
      </span>
      <Input
        ref={input}
        className={'auth__input'}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        required={props.required}
        maxLength={props.maxLength}
        value={props.value}
        onChange={props.onChange}
        onFocus={() => setBoxShadow('shadow-blue')}
        onBlur={() => setBoxShadow('')}
      />
    </span>
  );
});

export default AuthInput;
