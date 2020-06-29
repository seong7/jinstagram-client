import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, join } from '../../modules/auth';
import { JoinForm } from '../../components';
import { Modal } from '../../components/common';

const Join = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.join,
    auth: auth.auth,
    authError: auth.authError,
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
    if (authError) {
      console.log('회원가입 실패');
      console.log(JSON.parse(authError.message));
      // 실패에 대한 예외 처리 필요

      if (auth) {
        console.log('회원가입 성공');
        history.push('/');
      }
    }
  }, [auth, authError, history]);

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
      />
    </Modal>
  );
};

export default withRouter(Join);
