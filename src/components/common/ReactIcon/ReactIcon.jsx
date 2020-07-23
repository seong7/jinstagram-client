import React from 'react';
import { BsPersonFill, BsLockFill } from 'react-icons/bs';
import { AiOutlineLoading } from 'react-icons/ai';
import { WiDaySunny } from 'react-icons/wi';
import { IoIosMoon } from 'react-icons/io';

const ReactIcon = ({ icon }) => {
  switch (icon) {
    case 'BsPersonFill':
      return <BsPersonFill />;
    case 'BsLockFill':
      return <BsLockFill />;
    case 'AiOutlineLoading':
      return <AiOutlineLoading />;
    case 'WiDaySunny':
      return <WiDaySunny />;
    case 'IoIosMoon':
      return <IoIosMoon />;
    default:
      return <></>;
  }
};

export default ReactIcon;
