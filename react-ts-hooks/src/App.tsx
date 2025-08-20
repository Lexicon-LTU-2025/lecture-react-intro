import { useEffect, useState } from 'react';
import { Name } from './Name';
import './App.css';

function App() {
  //let count = 10; // This doesn't work in React, the value is updated, but the DOM is not.
  const [count, setCount] = useState(0);

  const decremenet = (): void => {
    setCount((prev) => prev - 1);
  };

  const increment = (): void => {
    // count++; // This doesn't work in React, the value is updated, but the DOM is not.
    // console.log(count);

    setCount((prev) => prev + 1);
  };

  const reset = (): void => {
    setCount(0);
  };

  // Ignore this for the moment. It just shows when the components i being rendered OR rerendered.
  useEffect(() => {
    console.log('App component was rendered');
  });

  return (
    <main className="app">
      <div className="counter">
        <button onClick={decremenet}>Decrese count with 1</button>
        <p>Count: {count}</p>
        <button onClick={increment}>Increase count with 1</button>
        <button onClick={reset}>Reset to 0</button>
      </div>
      <Name />
    </main>
  );
}

export default App;
