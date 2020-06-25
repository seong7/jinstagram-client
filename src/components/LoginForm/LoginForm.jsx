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
          text: 'Login',
        },
      ]}
    />
  );
};

export default LoginForm;
