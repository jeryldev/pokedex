import React, { useState } from 'react';

// https://usehooks.com/useLocalStorage/

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const data = window.localStorage.getItem(key);
      return data ? JSON.parse(data) : initialValue;
    } catch (error) {
      console.log('Error saving data locally::', error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save State
      setStoredValue(valueToStore);

      // Save Locally
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log('setValue error has occurred::', error);
    }
  };

  return [storedValue, setValue];
};
