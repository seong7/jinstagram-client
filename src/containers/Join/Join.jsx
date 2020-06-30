import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, join } from '../../modules/auth';
import { JoinForm } from '../../components';
import { Modal } from '../../components/common';

const Join = ({ history }) => {
  const [isIDConflict, setIsIDConflict] = useState(false);
  const dispatch = useDispatch();
  const { form, auth, joinError } = useSelector(({ auth }) => ({
    form: auth.join,
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
        // dispatch(
        //   changeField({
        //     form: 'join',
        //     key: 'password',
        //     value: '',
        //   })
        // );
        // dispatch(
        //   changeField({
        //     form: 'join',
        //     key: 'passwordCheck',
        //     value: '',
        //   })
        // );
      }
      setIsIDConflict(true);
    } else if (auth) {
      console.log('회원가입 성공');
      history.push('/');
    }
  }, [auth, joinError, history, dispatch]);

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
        isIDConflict={isIDConflict}
      />
    </Modal>
  );
};

export default withRouter(Join);
