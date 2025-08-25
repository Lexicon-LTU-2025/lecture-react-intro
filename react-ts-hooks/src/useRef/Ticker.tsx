import { useRef, type ReactElement } from 'react';
import { useCounter } from '../useEffect/hooks/useCounter';

export const Ticker = (): ReactElement => {
  const { count, increment } = useCounter(10);

  // A regular variable won't work since it will be reset in every rerender.
  // let intervalRef: number;

  const intervalRef = useRef<number | null>(null);
  const isCountingRef = useRef<boolean>(false);

  const handleOnStartClick = () => {
    if (isCountingRef.current === true) {
      console.log('A count is already running!');
      return;
    }

    intervalRef.current = setInterval(() => {
      increment();
    }, 1000);

    isCountingRef.current = true;
    console.log(`Ticker #${intervalRef.current} started`);
  };

  const handleOnStopClick = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      console.log(`Ticker #${intervalRef.current} stopped`);
    }

    isCountingRef.current = false;
  };

  return (
    <div className="ticker">
      <button onClick={handleOnStartClick}>Start</button>
      <p>Ticks: {count}</p>
      <button onClick={handleOnStopClick}>Stop</button>
    </div>
  );
};
