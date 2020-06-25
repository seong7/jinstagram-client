import React, { useState, useCallback } from 'react';
import './Login.scss';
import { login } from '../../api/loginApi';
import { LoginForm } from '../../components';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(null);
  const [isError, setIsError] = useState(null);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      login(id, password).then((response) => {
        if (response.status === 200) {
          setIsAuthorized('authorized');
          setIsError(null);
        } else if (response.status !== 200) {
          setIsError('error');
          setIsAuthorized(null);
        }
      });
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
      isError={isError}
      isAuthorized={isAuthorized}
    />
  );
};

export default Login;
