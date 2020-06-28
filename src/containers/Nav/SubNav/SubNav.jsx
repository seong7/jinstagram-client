import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '../../../components/common';
import './SubNav.scss';
import { useCallback } from 'react';

const SubNav = ({ history }) => {
  const clickRegister = useCallback((e) => {
    history.push('/register');
  }, []);

  return (
    <ul className='header__nav-sub-nav'>
      <li>
        <Button
          className='bg-blue header__nav-sub-nav-element'
          text='회원가입'
          onClick={clickRegister}
        />
      </li>
    </ul>
  );
};

export default withRouter(SubNav);
