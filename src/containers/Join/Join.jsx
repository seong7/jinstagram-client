import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, join, validCheck } from '../../modules/auth';
import { JoinForm } from '../../components/auth';
import { Modal } from '../../components/common';

const Join = ({ history }) => {
  const [isIDConflict, setIsIDConflict] = useState(false);
  const dispatch = useDispatch();
  const {
    form,
    userId_valid,
    password_valid,
    passwordCheck_valid,
    auth,
    joinError,
  } = useSelector(({ auth }) => ({
    form: auth.join,
    userId_valid: auth.join.userId_valid,
    password_valid: auth.join.password_valid,
    passwordCheck_valid: auth.join.passwordCheck_valid,
    auth: auth.auth,
    joinError: auth.joinError,
  }));

  const handleChange = useCallback(
    (e) => {
      const { value, name } = e.target;
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
    },
    [dispatch]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // console.log('SUBMIT _ form : ', form);
      const { userId, password } = form;
      dispatch(
        join({
          userId,
          password,
        })
      );
    },
    [dispatch, form]
  );

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
      }
      setIsIDConflict(true);
    } else if (auth) {
      console.log('회원가입 성공');
      history.push('/');
    }
  }, [auth, joinError, history, dispatch]);

  useEffect(() => {
    const isUserIdValid = userId_valid.reduce((isAllValid, c) => {
      return c.isValid && isAllValid;
    }, true);
    // password_valid
    // passwordCheck_valid
  }, [userId_valid]);

  return (
    <Modal isVisible={true}>
      <JoinForm
        onSubmit={handleSubmit}
        onChange={handleChange}
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
        isIDConflict={isIDConflict}
      />
    </Modal>
  );
};

export default withRouter(Join);
