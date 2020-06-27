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
          focus: props.isPasswordFocused === true ? 'true' : 'false',
        },
      ]}
      buttons={[
        {
          className: 'login__form-element btn-blue',
          type: 'submit',
          text: props.isError ? '다시 로그인하기' : '로그인',
          isError: props.isError,
        },
      ]}
    />
  );
};

export default LoginForm;
