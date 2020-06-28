import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '../../../components/common';
import './SubNav.scss';
import { useCallback } from 'react';

const SubNav = ({ history }) => {
  const clickJoin = useCallback((e) => {
    history.push('/join');
  }, []);

  return (
    <ul className='header__nav-sub-nav'>
      <li>
        <Button
          className='bg-blue header__nav-sub-nav-element'
          text='회원가입'
          onClick={clickJoin}
        />
      </li>
    </ul>
  );
};

export default withRouter(SubNav);
