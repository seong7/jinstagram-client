import React, { useCallback } from 'react';
import { Toggle } from '../../common';

const ModeToggle = () => {
  const handleChange = useCallback((e) => {
    if (e.target.checked) {
      document.body.dataset.theme = 'dark';
    } else if (!e.target.checked) {
      document.body.dataset.theme = 'light';
    }
  }, []);

  return <Toggle onChange={handleChange} />;
};

export default ModeToggle;
