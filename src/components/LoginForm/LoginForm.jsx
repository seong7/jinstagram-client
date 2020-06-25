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
          name: 'id',
          className: 'login__form-element',
          required: true,
          maxLength: '20',
          type: 'text',
          value: props.inputValues.id,
          onChange: props.onChange,
        },
        {
          placeholder: 'Password',
          name: 'password',
          className: 'login__form-element',
          required: true,
          maxLength: '20',
          type: 'password',
          value: props.inputValues.password,
          onChange: props.onChange,
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
