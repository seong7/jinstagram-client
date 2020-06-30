import React from 'react';
import { Form, Input, Button } from '../common';
import './LoginForm.scss';

const LoginForm = (props) => {
  return (
    <Form
      name='login'
      className='login__form'
      autoComplete='off'
      onSubmit={props.onSubmit}
    >
      <Input
        className={`login__form-element focus__shadow-blue ${
          props.isIDError ? 'placeholder-red' : ''
        }`}
        placeholder={
          props.isIDError === true ? 'ID 가 존재하지 않습니다.' : 'ID'
        }
        name={'userId'}
        required={true}
        maxLength={'20'}
        type={'text'}
        value={props.inputValueState.userId}
        onChange={props.onChange}
        focus={props.isIDError === true ? 'true' : 'false'}
      />
      <Input
        className={`login__form-element focus__shadow-blue
        ${props.isPasswordError ? 'placeholder-red' : ''}`}
        placeholder={
          props.isPasswordError === true
            ? 'Password 가 일치하지 않습니다.'
            : 'Password'
        }
        name={'password'}
        required={true}
        maxLength={'20'}
        type={'password'}
        value={props.inputValueState.password}
        onChange={props.onChange}
        focus={props.isPasswordError === true ? 'true' : 'false'}
      />
      <Button
        className={'login__form-element bg-blue'}
        type={'submit'}
        text={
          props.isPasswordError || props.isIDError
            ? '다시 로그인하기'
            : '로그인'
        }
        isError={props.isPasswordError || props.isIDError}
      />
    </Form>
  );
};

export default LoginForm;
