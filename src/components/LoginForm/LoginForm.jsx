import React from 'react';
import { Form } from '../common';
import './LoginForm.scss';

const LoginForm = (props) => {
  return (
    <Form
      name='login'
      className='login__form'
      autoComplete='off'
      onSubmit={props.onSubmit}
      inputs={[
        {
          placeholder: 'ID',
          name: 'userId',
          className: 'login__form-element',
          required: true,
          maxLength: '20',
          type: 'text',
          value: props.inputValueState.userId,
          onChange: props.onChange,
          focus: props.inputFocus === 'userId' ? 'true' : 'false', // boolean 을 넣어 줄 수 없어 string 으로 처리
        },
        {
          placeholder: 'Password',
          name: 'password',
          className: 'login__form-element',
          required: true,
          maxLength: '20',
          type: 'password',
          value: props.inputValueState.password,
          onChange: props.onChange,
          focus: props.inputFocus === 'password' ? 'true' : 'false',
        },
      ]}
      buttons={[
        {
          className: 'login__form-element login-btn',
          type: 'submit',
          text: props.isError ? '다시 시도해주세요.' : '로그인',
          isError: props.isError,
          isAuthorized: props.isAuthorized,
        },
      ]}
    />
  );
};

export default LoginForm;
