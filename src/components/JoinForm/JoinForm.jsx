import React from 'react';
import { Form, Modal } from '../common';
import './JoinForm.scss';

const JoinForm = (props) => {
  return (
    <Modal className='visible'>
      <>
        <div>
          <p>[ 로고 ]</p>
        </div>
        <Form
          name='join'
          className='join__form'
          autoComplete='off'
          inputs={[
            {
              className: 'join__form-element focus__shadow-blue',
              placeholder: 'ID',
              name: 'userId',
              required: true,
              maxLength: '20',
              type: 'text',
            },
            {
              className: 'join__form-element focus__shadow-blue',
              placeholder: 'Password',
              name: 'password',
              required: true,
              maxLength: '20',
              type: 'password',
            },
            {
              className: 'join__form-element focus__shadow-blue',
              placeholder: 'password 확인',
              name: 'PasswordCheck',
              required: true,
              maxLength: '20',
              type: 'password',
            },
          ]}
          buttons={[
            {
              className: 'join__form-element bg-blue',
              type: 'submit',
              text: '회원가입',
            },
          ]}
        />
      </>
    </Modal>
  );
};

export default JoinForm;
