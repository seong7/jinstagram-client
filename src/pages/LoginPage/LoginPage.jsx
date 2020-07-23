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
            poster={process.env.REACT_APP_HOME_VIDEO_POSTER}
          >
            <source
              src={process.env.REACT_APP_HOME_VIDEO_MP4}
              type='video/mp4'
            />
            <source
              src={process.env.REACT_APP_HOME_VIDEO_WEBM}
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
