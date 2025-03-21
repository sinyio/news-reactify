import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);

      return () => {
        clearTimeout(handler);
      };
    }, delay);
  }, [value, delay]);

  return debouncedValue;
};
