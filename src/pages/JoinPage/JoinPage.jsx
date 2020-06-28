import React from 'react';
import { PageLayout } from '../styled';
import { Join } from '../../containers';
import './JoinPage.scss';

const JoinPage = () => {
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
