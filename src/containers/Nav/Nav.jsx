import React from 'react';
import SubNav from './SubNav/SubNav.jsx';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className='nav'>
      <span>
        <a href=''>
          <img className='logo' src='./logo_bright.png' alt='Logo' />
        </a>
        <span>
          <img className='logo-text' src='./text_bright.png' alt='jinstagram' />
        </span>
      </span>
      <SubNav />
    </nav>
  );
};

export default Nav;
