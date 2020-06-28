import React from 'react';
import { Form } from '../common';
import './JoinForm.scss';

const JoinForm = (props) => {
  return (
    <Form name='join' className='join__form' autoComplete='off' inputs={[{}]} />
  );
};

export default JoinForm;
