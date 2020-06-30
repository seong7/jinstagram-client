import React from 'react';
import { Form, Input, Button } from '../common';
import { BsPersonFill } from 'react-icons/bs';

import './JoinForm.scss';

const JoinForm = (props) => {
  return (
    <>
      <div>
        <p></p>
      </div>
      <Form
        name='join'
        className='join__form'
        autoComplete='off'
        onSubmit={props.onSubmit}
      >
        <Input
          profix={<BsPersonFill />}
          className={`join__form-element focus__shadow-blue ${
            props.isIDConflict ? 'placeholder-red' : ''
          }`}
          placeholder={props.isIDConflict ? '이미 존재하는 ID 입니다.' : 'ID'}
          name={'userId'}
          required={true}
          maxLength={'20'}
          type={'text'}
          value={props.inputValueState.userId}
          onChange={props.onChange}
          focus={props.isIDConflict === true ? 'true' : 'false'}
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
