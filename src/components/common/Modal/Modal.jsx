import React, { useState, useEffect } from 'react';
import './Modal.scss';

const Modal = (props) => {
  const [classNames, setClassNames] = useState('');

  useEffect(() => {
    const className =
      (props.className || '') + (props.isVisible ? 'visible' : '');
    setClassNames(className);
  }, [props.className, props.isVisible]);

  return (
    <div className={`modal__wrapper ${classNames}`}>
      <div className='modal__content'>{props.children}</div>
    </div>
  );
};

export default Modal;
