import React, { useEffect, useState, useCallback } from 'react';
import {
  IoMdCheckmark,
  IoMdCloseCircleOutline,
  // IoMdCloseCircle,
} from 'react-icons/io';
import './ValidCheck.scss';

const Checks = (props) => {
  const [isValid, setIsValid] = useState(false);
  const icon = isValid ? <IoMdCheckmark /> : <IoMdCloseCircleOutline />;
  return (
    <li>
      <span className={isValid ? 'check-valid' : 'check-unvalid'}>
        {icon} {props.item}
      </span>
    </li>
  );
};

const ValidCheck = (props) => {
  const [checkItems, setCheckItems] = useState(null);

  useEffect(() => {
    switch (props.name) {
      case 'ID':
        setCheckItems([
          { item: '영문 소문자 2자 이상', regex: '' },
          { item: '숫자 1자 이상', regex: '' },
        ]);
    }
  }, [props.name]);

  return (
    <ul className={`valid-check ${props.className}`}>
      {checkItems && checkItems.map((c, i) => <Checks key={i} item={c.item} />)}
    </ul>
  );
};

export default ValidCheck;
