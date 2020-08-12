import React from 'react';
import { Form, Button } from 'components/common';
import { AuthInput } from 'components/auth';
import './JoinForm.scss';

const JoinForm = (props) => {
  return (
    <>
      <div>
        <span>
          <img className='join_form-logo' src='./favicon.png' alt='Logo' />
        </span>
      </div>
      <Form
        name='join'
        className='join__form'
        autoComplete='off'
        onSubmit={props.onSubmit}
      >
        <AuthInput
          name='userId'
          placeholder={props.isIDConflict ? '이미 존재하는 ID 입니다.' : 'ID'}
          className={`join__form-element ${
            props.isIDConflict ? 'placeholder-red' : ''
          }`}
          required
          maxLength='20'
          type='text'
          value={props.inputValueState.userId}
          onChange={props.onChange}
          onBlur={props.onBlur}
          shouldFocus={props.isIDConflict}
          prefixIcon='BsPersonFill'
          validation={props.validation.userId}
          setGlobalValidation={props.setGlobalValidation}
        />
        <AuthInput
          name='password'
          placeholder='password'
          className='join__form-element'
          required
          maxLength='20'
          type='password'
          value={props.inputValueState.password}
          onChange={props.onChange}
          prefixIcon='BsLockFill'
          validation={props.validation.password}
          setGlobalValidation={props.setGlobalValidation}
        />
        <AuthInput
          name='passwordCheck'
          placeholder='password 확인'
          className='join__form-element'
          required
          maxLength='20'
          type='password'
          value={props.inputValueState.passwordCheck}
          onChange={props.onChange}
          prefixIcon='BsLockFill'
          validation={props.validation.passwordCheck}
          setGlobalValidation={props.setGlobalValidation}
        />
        <Button
          className={`join__form-element join__form-btn ${
            props.isSubmittable ? 'btn' : 'bg-grey disabled'
          }`}
          type='submit'
          text='회원가입'
          isLoading={props.isLoading}
        />
      </Form>
    </>
  );
};

export default JoinForm;
