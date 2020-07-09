import React from 'react';
import { BsPersonFill, BsLockFill } from 'react-icons/bs';
import { AiOutlineLoading } from 'react-icons/ai';

const ReactIcon = ({ icon }) => {
  switch (icon) {
    case 'BsPersonFill':
      return <BsPersonFill />;
    case 'BsLockFill':
      return <BsLockFill />;
    case 'AiOutlineLoading':
      return <AiOutlineLoading />;
    default:
      return <></>;
  }
};

export default ReactIcon;
