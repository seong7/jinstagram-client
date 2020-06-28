import React from 'react';
import { Button } from '../../../components/common';
import './SubNav.scss';

const SubNav = () => {
  return (
    <ul className='header__nav-sub-nav'>
      <li>
        <Button
          className='bg-blue header__nav-sub-nav-element'
          text='회원가입'
        />
      </li>
    </ul>
  );
};

export default SubNav;
