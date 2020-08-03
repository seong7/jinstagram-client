import React from 'react';
import SubNav from './SubNav/SubNav';
import './Nav.scss';

const Nav = () => {
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
      <SubNav />
    </nav>
  );
};

export default Nav;
