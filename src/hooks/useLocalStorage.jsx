import { useState } from 'react';

const useLocalStorage = ({ key, initialValue = '' }) => {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const handleValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, handleValue];
};

export default useLocalStorage;
