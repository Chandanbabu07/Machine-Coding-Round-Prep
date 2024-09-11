import { useEffect, useRef, useState } from "react";

export const useThrottle = (func, delay) => {
  const [throtledValue, setThrotledValue] = useState(func);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      const timeElapsed = now - lastExecuted.current;

      if (timeElapsed >= delay) {
        setThrotledValue(func);
        lastExecuted.current = now;
      }
    }, delay - (Date.now() - lastExecuted.current));

    return () => {
      clearTimeout(handler);
    };
  }, [delay, func]);

  return throtledValue;
};
