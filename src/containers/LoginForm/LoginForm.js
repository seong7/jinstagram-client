import React, { useState, useCallback, useRef } from 'react';
import './LoginForm.scss';
import { login } from '../../api/loginApi';

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const inputId = useRef(null);
  const inputPassword = useRef(null);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      login(id, password);
    },
    [id, password]
  );
  const handleChange = useCallback((e) => {
    const target = e.target;
    if (target === inputId.current) {
      // console.log(target);
      setId(target.value);
    } else if (target === inputPassword.current) {
      setPassword(target.value);
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
        ref={inputId}
      />
      <input
        placeholder='Password'
        className='login__form-element pwd'
        required
        maxLength='20'
        type='password'
        value={password}
        onChange={handleChange}
        ref={inputPassword}
      />
      <button className='login__form-element login-btn' type='submit'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
