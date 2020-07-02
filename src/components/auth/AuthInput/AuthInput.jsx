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
  const input = createRef(null);
  const [boxShadow, setBoxShadow] = useState('');
  const [validCheckClassName, setValidCheckClassName] = useState('');
  const [iconColor, setIconColor] = useState('');

  const handleFocus = useCallback(() => {
    setBoxShadow('shadow-blue');
    setValidCheckClassName('active');
  }, [setBoxShadow, setValidCheckClassName]);

  const handleBlur = useCallback(() => {
    setBoxShadow('');
    setValidCheckClassName('');
  }, []);

  useEffect(() => {
    if (props.shouldFocus) {
      console.log('focus', input);
      input.current.focus();
    }

    // 해당 input 의 값이 validCheck 을 모두 통과했는지 검수
    if (props.validation) {
      const isAllValid = props.validation.reduce((isAllValid, c) => {
        return c.isValid && isAllValid;
      }, true);
      if (isAllValid) {
        setIconColor('color-blue');
      } else {
        setIconColor('');
      }
    }
  }, [props.shouldFocus, input, props.validation]);

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
