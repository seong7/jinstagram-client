import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, login } from '../../modules/auth';
import { LoginForm } from '../../components/auth';
import './Login.scss';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, loginError, loading } = useSelector(
    ({ auth: _auth, loading: _loading }) => {
      // console.log('form : ', auth.login);
      return {
        form: _auth.login,
        auth: _auth.auth,
        loginError: _auth.loginError,
        loading: _loading['auth/LOGIN'],
        // user: user.user,
      };
    }
  );
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isIDError, setIsIDError] = useState(false);

  const handleBlur = useCallback(() => {
    console.log('blur');
    if (isPasswordError) setIsPasswordError(false);
    if (isIDError) setIsIDError(false);
  }, [isPasswordError, isIDError]);

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

      if (isPasswordError) setIsPasswordError(false);
      console.log('change');
      if (isIDError) setIsIDError(false);
    },
    [dispatch, isPasswordError, isIDError]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // console.log('SUBMIT _ form : ', form);
      const { userId, password } = form;
      dispatch(
        login({
          userId,
          password,
        })
      );
    },
    [dispatch, form]
  );

  // 로그인 결과에 따른 setState
  useEffect(() => {
    if (loginError) {
      console.log('로그인 실패');
      console.log(loginError.message);
      switch (loginError.message) {
        case 'ID not found':
          setIsIDError(true);
          setIsPasswordError(false);
          dispatch(
            changeField({
              form: 'login',
              key: 'userId',
              value: '',
            })
          );
          break;

        case 'Password not correct':
          setIsIDError(false);
          setIsPasswordError(true);
          dispatch(
            changeField({
              form: 'login',
              key: 'password',
              value: '',
            })
          );
          break;

        default:
          break;
      }
    }
    if (auth) {
      console.log('로그인 성공');
      history.push('/');
      // console.log(auth);
    }
  }, [auth, loginError, dispatch, history]);

  return (
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      onBlur={handleBlur}
      inputValueState={{ userId: form.userId, password: form.password }}
      isPasswordError={isPasswordError}
      isIDError={isIDError}
      isLoading={loading}
    />
  );
};

export default withRouter(Login);
