import React, { useState, useEffect } from 'react';
import './Modal.scss';

const Modal = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    props.isVisible ? setIsVisible(false) : setIsVisible(true);
  }, [props.isVisible]);

  return (
    <div
      className={`modal__wrapper ${
        props.className + (isVisible ? ' visible' : '')
      }`}
    >
      <div className={`modal__content`}>{props.children}</div>
    </div>
  );
};

export default Modal;
