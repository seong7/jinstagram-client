import React, { useEffect, useState, memo, createRef } from 'react';
import { ValidCheck } from '../';
import { ReactIcon, Input } from '../../common';
import './AuthInput.scss';

const AuthInput = memo((props) => {
  const input = createRef(null);
  const [boxShadow, setBoxShadow] = useState('');
  const [validCheckClassName, setValidCheckClassName] = useState('');

  useEffect(() => {
    if (props.focus) {
      input.current.focus();
    }
  }, [props.focus, input]);

  return (
    <div className={props.className}>
      <span className={`input auth__input-wrapper ${boxShadow}`}>
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
          onFocus={() => {
            setBoxShadow('shadow-blue');
            setValidCheckClassName('active');
          }}
          onBlur={() => {
            setBoxShadow('');
            setValidCheckClassName('');
          }}
        />
      </span>
      {props.ValidCheck && (
        <ValidCheck
          className={validCheckClassName}
          name={props.placeholder}
          value={props.value}
        />
      )}
    </div>
  );
});

export default AuthInput;
