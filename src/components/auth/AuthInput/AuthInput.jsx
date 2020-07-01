import React, { useEffect, useState, memo, createRef } from 'react';
import { ValidCheck } from '../';
import { ReactIcon, Input } from '../../common';
import './AuthInput.scss';

const AuthInput = memo((props) => {
  const input = createRef(null);
  const [boxShadow, setBoxShadow] = useState('');
  const [validCheckClassName, setValidCheckClassName] = useState('');

  useEffect(() => {
    if (props.autoFocus) {
      input.current.focus();
    }
  }, [props.autoFocus, input]);

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
      {props.validation && (
        <ValidCheck
          className={validCheckClassName}
          validation={props.validation[props.name]}
        />
      )}
    </div>
  );
});

export default AuthInput;
