import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '../../../components/common';
import { ThemeToggle } from '../../../components/theme';
import './SubNav.scss';

const SubNav = ({ history, location }) => {
  const clickJoin = useCallback(
    (e) => {
      if (location.pathname === '/join') {
        history.push('/login');
      } else if (location.pathname === '/login') {
        history.push('/join');
      }
    },
    [history, location]
  );

  return (
    <ul className='nav__sub'>
      <li>
        <ThemeToggle />
      </li>
      <li>
        <Button
          className='bg-blue nav__sub-element'
          text={location.pathname === '/join' ? '로그인' : '회원가입'}
          onClick={clickJoin}
        />
      </li>
    </ul>
  );
};

export default withRouter(SubNav);
