import React from 'react';
import { Input, Button } from '../index';

const Form = (props) => {
  return (
    <form {...props}>
      {props.inputs.map((c, i) => (
        <Input key={i} {...c} />
      ))}
      {props.buttons.map((c, i) => (
        <Button key={i} {...c} />
      ))}
    </form>
  );
};

export default Form;
