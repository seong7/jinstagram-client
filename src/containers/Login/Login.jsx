import React, { useState, useCallback, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, login } from '../../modules/auth';
import { LoginForm } from '../../components';
import './Login.scss';

const Login = ({ history }) => {
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
  const [isError, setIsError] = useState(null);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      dispatch(
        changeField({
          form: 'login',
          key: name,
          value,
        })
      );
    },
    [dispatch]
  );

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
    if (authError) {
      console.log('로그인 실패');
      setIsError('error');
      setIsPasswordFocused(true);
      dispatch(
        changeField({
          form: 'login',
          key: 'password',
          value: '',
        })
      );
      // console.log(authError);
    }
    if (auth) {
      console.log('로그인 성공');
      history.push('/');
      // console.log(auth);
    }
  }, [auth, authError, dispatch, history]);

  return (
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      inputValueState={{ userId: form.userId, password: form.password }}
      isError={isError}
      isPasswordFocused={isPasswordFocused}
    />
  );
};

export default withRouter(Login);
