import React, { useEffect } from 'react';
import { PageLayout } from '../styled';
import { Join } from '../../containers';
import './JoinPage.scss';

const title = 'Jinstagram : 회원가입';
const JoinPage = () => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <PageLayout>
      <div className='join__page-img' />
      <section>
        <Join />
      </section>
    </PageLayout>
  );
};

export default JoinPage;
