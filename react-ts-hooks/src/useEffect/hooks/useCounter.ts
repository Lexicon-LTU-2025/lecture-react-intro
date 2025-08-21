import { useState } from 'react';

type UseCounterReturn = {
  count: number;
  decrement: () => void;
  increment: () => void;
  resetCount: () => void;
  setCountTo: (value: number) => void;
};

export const useCounter = (defaultCount: number): UseCounterReturn => {
  const [count, setCount] = useState<number>(defaultCount);

  const decrement = (): void => setCount((prevCount) => prevCount - 1);
  const increment = (): void => setCount((prevCount) => prevCount + 1);
  const resetCount = (): void => setCount(defaultCount);
  const setCountTo = (value: number): void => setCount(value);

  return { count, decrement, increment, resetCount, setCountTo };
};
