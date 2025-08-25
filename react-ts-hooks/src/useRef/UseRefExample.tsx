import { useRef, type ReactElement } from 'react';
import { Ticker } from './Ticker';

export const UseRefExample = (): ReactElement => {
  // Part 1 of creating a ref - define the ref variable
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.focus();
    console.log(inputRef);
    console.log('id:', inputRef.current?.id);
  };

  console.log(inputRef);

  return (
    <section className="use-ref-example">
      <form className="form">
        <label htmlFor="name-input">Name</label>
        {/* Part 2 of creating a ref - bind the ref variable to the actual element */}
        <input id="name-input" name="name" type="text" ref={inputRef} />
      </form>
      <button onClick={handleClick}>Focus in input</button>
      <Ticker />
    </section>
  );
};
