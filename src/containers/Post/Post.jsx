import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Post = ({ history }) => {
  const { auth } = useSelector(({ auth: _auth }) => {
    return {
      auth: _auth.auth,
    };
  });

  useEffect(() => {
    if (!auth) history.push('/login');
  }, [auth, history]);

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
