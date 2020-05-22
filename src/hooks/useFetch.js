import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [currentState, setCurrentState] = useState({
    data: null,
    isLoading: true,
  });

  useEffect(() => {
    let mounted = true;
    const abortController = new AbortController();

    setCurrentState((state) => ({
      data: state.data,
      isLoading: true,
    }));

    const fetchData = async (source) => {
      const resp = await fetch(source, {
        signal: abortController.signal,
      });
      const data = await resp.json();

      if (mounted) return setCurrentState({ data: data, isLoading: false });
    };

    fetchData(url);

    const cleanup = () => {
      mounted = false;
      abortController.abort();
    };
    return cleanup;
    // fetchData(url);
  }, [url]);

  return currentState;
};
