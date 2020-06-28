import React from 'react';
import { Form } from '../common';
import './JoinForm.scss';

const JoinForm = (props) => {
  return (
    <>
      <div>
        <p>[ 로고 ]</p>
      </div>
      <Form
        name='join'
        className='join__form'
        autoComplete='off'
        onSubmit={props.onSubmit}
        inputs={[
          {
            className: 'join__form-element focus__shadow-blue',
            placeholder: 'ID',
            name: 'userId',
            required: true,
            maxLength: '20',
            type: 'text',
            value: props.inputValueState.userId,
            onChange: props.onChange,
          },
          {
            className: 'join__form-element focus__shadow-blue',
            placeholder: 'Password',
            name: 'password',
            required: true,
            maxLength: '20',
            type: 'password',
            value: props.inputValueState.password,
            onChange: props.onChange,
          },
          {
            className: 'join__form-element focus__shadow-blue',
            placeholder: 'password 확인',
            name: 'passwordCheck',
            required: true,
            maxLength: '20',
            type: 'password',
            value: props.inputValueState.passwordCheck,
            onChange: props.onChange,
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
  );
};

export default JoinForm;
