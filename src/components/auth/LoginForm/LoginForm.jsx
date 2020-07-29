import React from 'react';
import { Form, Button } from '../../common';
import { AuthInput } from '../';
import './LoginForm.scss';
import { useEffect } from 'react';

const LoginForm = (props) => {
  useEffect(() => {
    console.log(props.isIDError);
  }, [props.isIDError]);
  return (
    <Form
      name='login'
      className='login__form'
      autoComplete='off'
      onSubmit={props.onSubmit}
    >
      <AuthInput
        className={`login__form-element ${
          props.isIDError ? 'placeholder-red' : ''
        }`}
        placeholder={props.isIDError ? 'ID 가 존재하지 않습니다.' : 'ID'}
        name={'userId'}
        required={true}
        maxLength={'20'}
        type={'text'}
        value={props.inputValueState.userId}
        onChange={props.onChange}
        onBlur={props.onBlur}
        shouldFocus={props.isIDError}
        prefixIcon={'BsPersonFill'}
      />
      <AuthInput
        className={`login__form-element
        ${props.isPasswordError ? 'placeholder-red' : ''}`}
        placeholder={
          props.isPasswordError ? 'Password 가 일치하지 않습니다.' : 'Password'
        }
        name={'password'}
        required={true}
        maxLength={'20'}
        type={'password'}
        value={props.inputValueState.password}
        onChange={props.onChange}
        onBlur={props.onBlur}
        shouldFocus={props.isPasswordError}
        prefixIcon={'BsLockFill'}
      />
      <Button
        className={'login__form-element btn'}
        type={'submit'}
        text={'로그인'}
        isLoading={props.isLoading}
      />
    </Form>
  );
};

export default LoginForm;
