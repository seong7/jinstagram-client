import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'modules/user';
import SubNav from 'containers/Nav/SubNav/SubNav';
import './Nav.scss';

const Nav = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(({ auth: _auth }) => ({
    auth: _auth.auth,
  }));

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <nav className='nav'>
      <span>
        <a href='/'>
          <span>
            <img
              className='logo-text'
              src='./text_bright.png'
              alt='jinstagram'
            />
          </span>
        </a>
      </span>
      <SubNav isLoggedIn={auth} onLogout={onLogout} />
    </nav>
  );
};

export default Nav;
