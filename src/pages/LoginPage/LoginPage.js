import React from 'react';
import { PageLayout } from '../styled';
import './LoginPage.scss';

const LoginPage = () => {
  return (
    <PageLayout>
      <header className='header'>
        <nav></nav>
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
        <form name='login' autoComplete='off'>
          <label htmlFor='user-id'>아이디</label>
          <input prefix='id입력' type='text' id='user-id' />
        </form>
      </section>
    </PageLayout>
  );
};

export default LoginPage;
