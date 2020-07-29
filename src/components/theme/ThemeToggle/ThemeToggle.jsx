import React, { useCallback, useState, useEffect } from 'react';
import { Toggle, ReactIcon } from '../../common';
import { setStorage, getStorage } from '../../../lib/localstorage/localstorage';

const keyForStorage = 'theme';

const themeTransition = () => {
  document.body.classList.add('theme-transition');
  setTimeout(() => {
    document.body.classList.remove('theme-transition');
  }, 1000);
};

const setBodyDataTheme = (value) => {
  // console.log('set body', value);
  document.body.setAttribute('data-theme', value || 'light');
};

const themeIcons = (
  <>
    <ReactIcon icon={'IoIosMoon'} /> <ReactIcon icon={'WiDaySunny'} />
  </>
);

const ThemeToggle = () => {
  const [theme, setTheme] = useState(''); // 'dark' or 'light'

  const handleChange = useCallback((e) => {
    themeTransition();
    if (e.target.checked) {
      setTheme('dark');
    } else if (!e.target.checked) {
      setTheme('light');
    }
  }, []);

  // 최초 렌더 시 실행 (아래 useEffect 보다 먼저 실행된다.)
  useEffect(() => {
    const _theme = getStorage(keyForStorage);
    setTheme(_theme);
    // console.log('first theme', _theme);
  }, []);

  // 최초와 그 외 render 시 state 인 theme 이 바뀌었으면 실행
  useEffect(() => {
    setStorage(keyForStorage, theme);
    setBodyDataTheme(theme);
  }, [theme]);

  return (
    <Toggle
      onChange={handleChange}
      text={themeIcons}
      isChecked={theme === 'dark'}
    />
  );
};

export default ThemeToggle;
