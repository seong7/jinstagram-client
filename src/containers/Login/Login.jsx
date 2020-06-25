import React, { useState, useCallback } from 'react';
import './Login.scss';
import { login } from '../../api/loginApi';
import { LoginForm } from '../../components';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(null);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      login(id, password)
        .then((r) => console.log(r))
        .catch((e) => console.log('error', e));
    },
    [id, password]
  );

  const handleChange = useCallback((e) => {
    const { value, name } = e.target;
    if (name === 'id') {
      setId(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }, []);

  return (
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      inputValues={{ id, password }}
    />
  );
};

export default Login;
