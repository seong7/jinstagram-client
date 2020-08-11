import React, { useCallback, useState, useEffect } from 'react';
import { setStorage, getStorage } from 'lib/localstorage/localstorage';
import { Toggle, ReactIcon } from '../../common';

const keyForStorage = 'theme';

// <body> 에 색변환 transition 을 주는 class 를 추가했다가 제거하는 함수
const themeTransition = () => {
  document.body.classList.add('theme-transition');
  setTimeout(() => {
    document.body.classList.remove('theme-transition');
  }, 1000);
  /*
     css 에 아래를 추가해줘야한다.

     .theme-transition {
       body.theme-transition,
       body.theme-transition *,
       body.theme-transition *:before,
       body.theme-transition *:after {
         transition: all 0.3s ease-in-out !important;
         transition-delay: 0 !important;
       }
     }

   */
};

// <body> 에 data-theme 속성을 set 해주는 함수
// localStorage 에 저장된 value 를 받아와 매개변수로 호출한다. (default 는 'light' 이다.)
const setBodyDataTheme = (value) => {
  document.body.setAttribute('data-theme', value || 'light');
};

// toggle UI 에 넣을 icon UI 를 생성해주는 함수
// (ReactIcon 패키지를 받아서 사용했다.)
const themeIcons = (
  <>
    <ReactIcon icon='IoIosMoon' /> <ReactIcon icon='WiDaySunny' />
  </>
);

// React Component
const ThemeToggle = () => {
  const [theme, setTheme] = useState(''); // 'dark' or 'light'

  // Toggle UI 의 onChange event handler
  const handleChange = useCallback((e) => {
    themeTransition(); // transition class 제어

    // toggle (<input type="checkbox">) 이 체크 되어 있는지에 따라
    // state - theme 의 값을 set 한다.
    if (e.target.checked) {
      setTheme('dark');
    } else if (!e.target.checked) {
      setTheme('light');
    }
  }, []);

  // 최초 렌더 시 실행 (아래 useEffect 보다 먼저 실행된다.)
  useEffect(() => {
    // 최초 렌더할 때 localStorage 에서 theme 값을 받아온다.
    const _theme = getStorage(keyForStorage);
    setTheme(_theme);
  }, []);

  // 컴포넌트 최초 렌더 시 실행되고 (위의 useEffect 다음에 실행된다.)
  // 그 외 렌더 시에는 state - theme 값에 변화가 있어야 실행된다.
  useEffect(() => {
    // 해당 라인이 실행되었다는 것은 theme 값이 변화되었단 말이므로
    // localStorage 에 새로 저장한다.
    setStorage(keyForStorage, theme);
    setBodyDataTheme(theme); // html <body> 의 data-theme 속성 값도 변경해준다.
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
