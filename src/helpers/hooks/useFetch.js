import { useEffect, useState } from "react";

export const useFetch = (fetchFn, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchFn(params);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFn, stringParams]);

  return { data, isLoading, error };
};
