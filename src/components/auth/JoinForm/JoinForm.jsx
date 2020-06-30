import React from 'react';
import { Form, Button } from '../../common';
import { AuthInput } from '../';
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
        <AuthInput
          className={`join__form-element ${
            props.isIDConflict ? 'placeholder-red' : ''
          }`}
          placeholder={props.isIDConflict ? '이미 존재하는 ID 입니다.' : 'ID'}
          name={'userId'}
          required={true}
          maxLength={'20'}
          type={'text'}
          value={props.inputValueState.userId}
          onChange={props.onChange}
          focus={props.isIDConflict}
          prefixIcon={'BsPersonFill'}
          ValidCheck
        />
        <AuthInput
          className={'join__form-element'}
          placeholder={'password'}
          name={'password'}
          required={true}
          maxLength={'20'}
          type={'password'}
          value={props.inputValueState.password}
          onChange={props.onChange}
          prefixIcon={'BsLockFill'}
          ValidCheck
        />
        <AuthInput
          className={'join__form-element'}
          placeholder={'password 확인'}
          name={'passwordCheck'}
          required={true}
          maxLength={'20'}
          type={'password'}
          value={props.inputValueState.passwordCheck}
          onChange={props.onChange}
          prefixIcon={'BsLockFill'}
          ValidCheck
        />
        <Button
          className={'join__form-element join__form-btn bg-blue'}
          type={'submit'}
          text={'회원가입'}
        />
      </Form>
    </>
  );
};

export default JoinForm;
