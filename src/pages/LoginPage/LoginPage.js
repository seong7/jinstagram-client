import React from 'react';
import { PageLayout } from '../styled';

const LoginPage = () => {
  return (
    <PageLayout>
      <section>
        <video
          autoPlay
          muted
          loop
          poster={process.env.REACT_APP_HOME_VIDEO_POSTER}
        >
          <source src={process.env.REACT_APP_HOME_VIDEO_MP4} type='video/mp4' />
          <source
            src={process.env.REACT_APP_HOME_VIDEO_WEBM}
            type='video/webm'
          />
        </video>
      </section>
      <section>
        <form name='login' autocomplete='off'>
          <label htmlFor='user-id'>아이디</label>
          <input prefix='id입력' type='text' id='user-id' />
        </form>
      </section>
    </PageLayout>
  );
};

export default LoginPage;
