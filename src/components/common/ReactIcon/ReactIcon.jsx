import React from 'react';
import { BsPersonFill, BsLockFill } from 'react-icons/bs';

const ReactIcon = ({ icon }) => {
  switch (icon) {
    case 'BsPersonFill':
      return <BsPersonFill />;
    case 'BsLockFill':
      return <BsLockFill />;
    default:
      return <div></div>;
  }
};

export default ReactIcon;
