import React from 'react';
import './LoginForm.scss';

const LoginForm = () => {
  return (
    <form name='login' className='login__form' autoComplete='off'>
      <input
        placeholder='ID'
        className='login__form-element'
        required
        type='text'
      />
      <input
        placeholder='Password'
        className='login__form-element'
        required
        type='password'
      />
      <button className='login__form-element login-btn' type='submit'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
