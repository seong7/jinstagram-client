import React, {
  useEffect,
  useState,
  memo,
  createRef,
  useCallback,
} from 'react';
import ValidCheck from '../ValidCheck/ValidCheck';
import { ReactIcon, Input } from '../../common';
import './AuthInput.scss';

const AuthInput = memo((props) => {
  const { validation, setGlobalValidation, name } = props;
  const input = createRef(null);
  const [validCheckClassName, setValidCheckClassName] = useState('');
  const [iconColor, setIconColor] = useState('');

  const handleFocus = useCallback(() => {
    setValidCheckClassName('active');
  }, []);

  const handleBlur = useCallback(() => {
    setValidCheckClassName('');
    if (props.onBlur) props.onBlur();
  }, [props]);

  // input 에 focus 여부 결정
  useEffect(() => {
    if (props.shouldFocus) {
      input.current.focus();
    }
  }, [input, props.shouldFocus]);

  // 해당 input 의 값이 validCheck item 을 통과했는지 검수
  useEffect(() => {
    if (validation) {
      const isInputValid = validation.reduce(
        (isTheInputValid, c) => c.isValid && isTheInputValid,
        true
      );

      const color = isInputValid ? 'color-green' : '';

      setIconColor(color);
      setGlobalValidation(name, isInputValid);
    }
  }, [validation, setGlobalValidation, name]);

  return (
    <div className={props.className}>
      <span className='input auth__input-wrapper'>
        <span className={`auth__input-icon-wrapper ${iconColor}`}>
          <ReactIcon icon={props.prefixIcon} />
        </span>
        <Input
          ref={input}
          className='auth__input'
          name={props.name}
          placeholder={props.placeholder}
          type={props.type}
          required={props.required}
          maxLength={props.maxLength}
          value={props.value}
          onChange={props.onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </span>
      {props.validation && (
        <ValidCheck
          className={validCheckClassName}
          validation={props.validation}
        />
      )}
    </div>
  );
});

export default AuthInput;
