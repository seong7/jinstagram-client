import React from 'react';
import SubNav from './SubNav/SubNav.jsx';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className='header__nav'>
      <SubNav />
    </nav>
  );
};

export default Nav;
