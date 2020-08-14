import React, { useCallback, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'components/common';
import { ThemeToggle } from 'components/theme';
import './SubNav.scss';

const SubNav = ({ history, location, isLoggedIn, onLogout }) => {
  const handleButtonClick = useCallback(
    (e) => {
      if (location.pathname === '/join') {
        history.push('/login');
      } else if (location.pathname === '/login') {
        history.push('/join');
      }
    },
    [history, location]
  );

  const [btnText, setBtnText] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      setBtnText('로그아웃');
    } else if (location.pathname === '/join') {
      setBtnText('로그인');
    } else if (location.pathname === '/login') {
      setBtnText('회원가입');
    }
  }, [isLoggedIn, location.pathname, onLogout]);

  return (
    <ul className='nav__sub'>
      <li>
        <ThemeToggle />
      </li>
      <li>
        <Button
          className='btn-reverse nav__sub-element'
          text={btnText}
          onClick={isLoggedIn ? onLogout : handleButtonClick}
        />
      </li>
    </ul>
  );
};

export default withRouter(SubNav);
