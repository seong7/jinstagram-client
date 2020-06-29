import React from 'react';
import { Input, Button } from '../index';

const Form = (props) => {
  return (
    <form
      name={props.name}
      className={props.className}
      autoComplete={props.autoComplete}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
};

export default Form;
