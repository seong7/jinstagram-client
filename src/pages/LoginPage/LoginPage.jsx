import React, { useEffect, useRef } from 'react';
import { PageLayout } from 'pages/styled';
import { Login } from 'containers';
import './LoginPage.scss';

const title = 'Jinstagram : 로그인';

const LoginPage = () => {
  const vid = useRef(null);

  useEffect(() => {
    document.title = title;
    vid.current.play(); // video 자동 재생 (mobile _ios 에서 autoPlay 가 최초엔 안먹음)
  }, []);

  return (
    <PageLayout>
      <header className='header'>
        <div className='header__video-wrapper'>
          <video
            ref={vid}
            className='header__video'
            autoPlay
            muted
            loop
            playsInline
            poster='https://www.pexels.com/assets/videos/free-videos-7daa2ef41a140f70c757ce91913a4ecb90570b7d7cd2b401bae868350e02c83a.jpg'
          >
            <source
              src='https://static.pexels.com/lib/videos/free-videos.mp4'
              type='video/mp4'
            />
            <source
              src='https://static.pexels.com/lib/videos/free-videos.webm'
              type='video/webm'
            />
          </video>
        </div>
        <section className='header__text-centered'>
          <p>Lorem Ipsum Rose Test</p>
        </section>
      </header>
      <section className='login__form-wrapper'>
        <Login />
      </section>
    </PageLayout>
  );
};

export default LoginPage;
