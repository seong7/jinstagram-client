import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Post = ({ history }) => {
  const { auth } = useSelector(({ auth }) => {
    return {
      auth: auth.auth,
    };
  });

  useEffect(() => {
    if (!auth) history.push('/login');
  }, [auth]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      Post 페이지 입니다.
    </div>
  );
};

export default withRouter(Post);
