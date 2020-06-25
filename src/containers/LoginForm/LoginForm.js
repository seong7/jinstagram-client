import React, { useState, useCallback } from 'react';
import './LoginForm.scss';
import { login } from '../../api/loginApi';

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    login(id, password);
  };
  const handleChange = useCallback((e) => {
    if (e.target.classList.contains('id')) {
      setId(e.target.value);
    } else if (e.target.classList.contains('pwd')) {
      setPassword(e.target.value);
    }
  }, []);

  return (
    <form
      name='login'
      className='login__form'
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <input
        placeholder='ID'
        className='login__form-element id'
        required
        maxLength='20'
        type='text'
        value={id}
        onChange={handleChange}
      />
      <input
        placeholder='Password'
        className='login__form-element pwd'
        required
        maxLength='20'
        type='password'
        value={password}
        onChange={handleChange}
      />
      <button className='login__form-element login-btn' type='submit'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
