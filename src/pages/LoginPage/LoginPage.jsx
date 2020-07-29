import React, { useEffect } from 'react';
import { PageLayout } from '../styled';
import { Login } from '../../containers';
import './LoginPage.scss';

const title = 'Jinstagram : 로그인';

const LoginPage = () => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <PageLayout>
      <header className='header'>
        <div className='header__video-wrapper'>
          <video
            className='header__video'
            autoPlay
            muted
            loop
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
        <section className='header__content-centered'>
          <p>Get Connected To The World, now</p>
        </section>
      </header>
      <section>
        <Login />
      </section>
    </PageLayout>
  );
};

export default LoginPage;
