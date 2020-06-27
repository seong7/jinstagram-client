import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, login } from '../../modules/auth';
import './Login.scss';
// import { login } from '../../api/loginApi';
import { LoginForm } from '../../components';
// import { login } from '../../lib/api/loginApi';

const Login = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => {
    // console.log('form : ', auth.login);
    return {
      form: auth.login,
      auth: auth.auth,
      authError: auth.authError,
      // user: user.user,
    };
  });
  // const [id, setId] = useState('');
  // const [password, setPassword] = useState('');
  // const [isAuthorized, setIsAuthorized] = useState(null);
  // const [isError, setIsError] = useState(null);
  const [focusedInputName, setFocusedInputName] = useState(null);

  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      })
    );
    // console.log(form);
    // if (name === 'id') {
    //   setId(value);
    // } else if (name === 'password') {
    //   setPassword(value);
    // }
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // console.log('SUBMIT _ form : ', form);
      const { userId, password } = form;
      dispatch(
        login({
          userId: userId,
          password: password,
        })
      );
      // login(id, password).then((response) => {
      //   if (response.status === 200) {
      //     setIsAuthorized('authorized');
      //     setIsError(null);
      //   } else if (response.status !== 200) {
      //     setIsError('error');
      //     setIsAuthorized(null);
      //     setFocusedInputName('password');
      //     setPassword('');
      //   }
      // });
    },
    [
      /* id, password */
      dispatch,
      form,
    ]
  );

  useEffect(() => {
    // setFocusedInputName('userId');
  }, []);

  useEffect(() => {
    if (authError) {
      console.log('로그인 실패');
      // console.log(authError);
    }
    if (auth) {
      console.log('로그인 성공');
      // console.log(auth);
    }
  }, [auth, authError]);

  return (
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      inputValueState={{ userId: form.userId, password: form.password }}
      // isError={isError}
      // isAuthorized={isAuthorized}
      inputFocus={focusedInputName}
    />
  );
};

export default Login;
