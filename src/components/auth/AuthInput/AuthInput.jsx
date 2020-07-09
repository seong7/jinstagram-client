import React, {
  useEffect,
  useState,
  memo,
  createRef,
  useCallback,
} from 'react';
import { ValidCheck } from '../';
import { ReactIcon, Input } from '../../common';
import './AuthInput.scss';

const AuthInput = memo((props) => {
  const { validation, setGlobalValidation, name } = props;
  const input = createRef(null);
  const [boxShadow, setBoxShadow] = useState('');
  const [validCheckClassName, setValidCheckClassName] = useState('');
  const [iconColor, setIconColor] = useState('');

  const handleFocus = useCallback(() => {
    setBoxShadow('shadow-blue');
    setValidCheckClassName('active');
  }, []);

  const handleBlur = useCallback(() => {
    setBoxShadow('');
    setValidCheckClassName('');
  }, []);

  // input 에 focus 여부 결정
  useEffect(() => {
    if (props.shouldFocus) {
      input.current.focus();
    }
  }, [input, props.shouldFocus]);

  // 해당 input 의 값이 validCheck item 을 통과했는지 검수
  useEffect(() => {
    if (validation) {
      const isInputValid = validation.reduce((isInputValid, c) => {
        return c.isValid && isInputValid;
      }, true);

      let _iconColor = isInputValid ? 'color-blue' : '';

      setIconColor(_iconColor);
      setGlobalValidation(name, isInputValid);
    }
  }, [validation, setGlobalValidation, name]);

  return (
    <div className={props.className}>
      <span className={`input auth__input-wrapper ${boxShadow}`}>
        <span className={`auth__input-icon-wrapper ${iconColor}`}>
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
