import React, { useCallback } from 'react';
import { Toggle } from '../../common';

const themeTransition = () => {
  document.body.classList.add('theme-transition');
  setTimeout(() => {
    document.body.classList.remove('theme-transition');
  }, 1000);
};

const ModeToggle = () => {
  const handleChange = useCallback((e) => {
    themeTransition();

    if (e.target.checked) {
      document.body.setAttribute('data-theme', 'dark');
    } else if (!e.target.checked) {
      document.body.setAttribute('data-theme', 'light');
    }
  }, []);
  return <Toggle onChange={handleChange} />;
};

export default ModeToggle;
