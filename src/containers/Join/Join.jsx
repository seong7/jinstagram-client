import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, join, validCheck } from '../../modules/auth';
import { JoinForm } from '../../components/auth';
import { Modal } from '../../components/common';

const Join = ({ history }) => {
  const [isIDConflict, setIsIDConflict] = useState(false);
  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(false);
  const [isSubmittable, setIsSubmittable] = useState(false);

  const dispatch = useDispatch();
  const { form, auth, joinError, loading } = useSelector(
    ({ auth: _auth, loading: _loading }) => ({
      form: _auth.join,
      auth: _auth.auth,
      joinError: _auth.joinError,
      loading: _loading['auth/JOIN'],
    })
  );

  const globalValidationCheck = useCallback(
    (name, isInputValid) => {
      // console.log(name, isInputValid);
      switch (name) {
        case 'userId':
          setIsUserIdValid(isInputValid);
          break;
        case 'password':
          setIsPasswordValid(isInputValid);
          break;
        case 'passwordCheck':
          setIsPasswordCheckValid(isInputValid);
          break;
        default:
          break;
      }
      // console.log(
      //   '전체 : ',
      //   isUserIdValid,
      //   isPasswordValid,
      //   isPasswordCheckValid
      // );

      if (isUserIdValid && isPasswordValid && isPasswordCheckValid) {
        setIsSubmittable(true);
      } else {
        setIsSubmittable(false);
      }
    },
    [isUserIdValid, isPasswordValid, isPasswordCheckValid]
  );

  const handleChange = useCallback(
    (e) => {
      const { value, name } = e.target;

      if (/^[a-z0-9]*$/.test(value)) {
        // 영문 소문자, 숫자만의 조합만 입력 가능
        dispatch(
          changeField({
            form: 'join',
            key: name,
            value,
          })
        );
        dispatch(
          validCheck({
            key: name,
            value,
          })
        );

        if (name === 'password') {
          dispatch(
            changeField({
              form: 'join',
              key: 'passwordCheck',
              value: '',
            })
          );
          dispatch(
            validCheck({
              key: 'passwordCheck',
              value: '',
            })
          );
        }
      }

      if (isIDConflict) setIsIDConflict(false);
    },
    [dispatch, isIDConflict]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // console.log('SUBMIT _ form : ', form);
      if (isSubmittable) {
        const { userId, password } = form;
        dispatch(
          join({
            userId,
            password,
          })
        );
      }
    },
    [dispatch, form, isSubmittable]
  );

  const handleBlur = useCallback(() => {
    setIsIDConflict(false);
  }, []);

  useEffect(() => {
    if (joinError) {
      console.log('회원가입 실패');
      console.log(joinError.message);
      if (joinError.message === 'ID conflict') {
        dispatch(
          changeField({
            form: 'join',
            key: 'userId',
            value: '',
          })
        );
        dispatch(
          validCheck({
            key: 'userId',
            value: '',
          })
        );
      }
      setIsIDConflict(true);
    } else if (auth) {
      console.log('회원가입 성공');
      history.push('/');
    }
  }, [auth, joinError, history, dispatch]);

  return (
    <Modal isVisible>
      <JoinForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        onBlur={handleBlur}
        inputValueState={{
          userId: form.userId,
          password: form.password,
          passwordCheck: form.passwordCheck,
        }}
        validation={{
          userId: form.userId_valid,
          password: form.password_valid,
          passwordCheck: form.passwordCheck_valid,
        }}
        setGlobalValidation={globalValidationCheck}
        isIDConflict={isIDConflict}
        isSubmittable={isSubmittable}
        isLoading={loading}
      />
    </Modal>
  );
};

export default withRouter(Join);
