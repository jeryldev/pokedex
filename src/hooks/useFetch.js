import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [currentState, setCurrentState] = useState({
    data: null,
    isLoading: true,
  });

  useEffect(() => {
    try {
      setCurrentState((state) => ({
        data: state.data,
        isLoading: true,
      }));

      const fetchData = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();

        console.log('data::', data);
        return setCurrentState({ data: data, isLoading: false });
      };

      fetchData(url);
    } catch (error) {
      console.log('Error::', error);
    }
  }, [url, setCurrentState]);

  return currentState;
};
