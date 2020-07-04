import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { AiOutlineStop } from 'react-icons/ai';
import './ValidCheck.scss';

const Checks = ({ item, isValid }) => {
  const _icon = isValid ? <IoMdCheckmark /> : <AiOutlineStop />;
  const _className = isValid ? 'check-valid' : 'check-unvalid';
  return (
    <li className={'check-wrapper'}>
      <span className={`${_className}`}>
        <span className={'check-icon'}>{_icon}</span> {item}
      </span>
    </li>
  );
};

const ValidCheck = ({ className, validation }) => {
  return (
    <ul className={`valid-check ${className}`}>
      {validation.map((c, i) => (
        <Checks key={i} item={c.item} isValid={c.isValid} />
      ))}
    </ul>
  );
};

export default ValidCheck;
