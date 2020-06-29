import React from 'react';
import { Form, Input, Button } from '../common';
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
      >
        <Input
          className={'join__form-element focus__shadow-blue'}
          placeholder={'ID'}
          name={'userId'}
          required={true}
          maxLength={'20'}
          type={'text'}
          value={props.inputValueState.userId}
          onChange={props.onChange}
        />
        <Input
          className={'join__form-element focus__shadow-blue'}
          placeholder={'password'}
          name={'password'}
          required={true}
          maxLength={'20'}
          type={'password'}
          value={props.inputValueState.password}
          onChange={props.onChange}
        />
        <Input
          className={'join__form-element focus__shadow-blue'}
          placeholder={'password 확인'}
          name={'passwordCheck'}
          required={true}
          maxLength={'20'}
          type={'password'}
          value={props.inputValueState.passwordCheck}
          onChange={props.onChange}
        />
        <Button
          className={'join__form-element bg-blue'}
          type={'submit'}
          text={'회원가입'}
        />
      </Form>
    </>
  );
};

export default JoinForm;
