import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeAuth, login } from '../../modules/auth';
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
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isIDError, setisIDError] = useState(false);

  const handleChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      if (auth || authError) {
        // auth 정보 초기화
        dispatch(initializeAuth());
      }

      dispatch(
        changeField({
          form: 'login',
          key: name,
          value,
        })
      );
    },
    [dispatch, auth, authError]
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
    },
    [dispatch, form]
  );

  useEffect(() => {
    if (authError) {
      console.log('로그인 실패');
      console.log(authError.message);
      switch (authError.message) {
        case 'ID not found':
          setisIDError(true);
          setIsPasswordError(false);
          dispatch(
            changeField({
              form: 'login',
              key: 'userId',
              value: '',
            })
          );
          dispatch(
            changeField({
              form: 'login',
              key: 'password',
              value: '',
            })
          );
          break;

        case 'Password not correct':
          setisIDError(false);
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
  }, [auth, authError, dispatch, history]);

  return (
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      inputValueState={{ userId: form.userId, password: form.password }}
      isPasswordError={isPasswordError}
      isIDError={isIDError}
    />
  );
};

export default withRouter(Login);
