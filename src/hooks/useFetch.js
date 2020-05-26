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

    if (mounted) {
      (async () => {
        try {
          const resp = await fetch(url, {
            signal: abortController.signal,
          });
          const data = await resp.json();

          // if (mounted) return setCurrentState({ data: data, isLoading: false });
          return setCurrentState({ data: data, isLoading: false });
        } catch (error) {
          setCurrentState({ data: 'Pokemon not found', isLoading: false });
        }
      })();
    }

    const cleanup = () => {
      mounted = false;
      abortController.abort();
    };
    return cleanup;
  }, [url]);

  return currentState;
};
