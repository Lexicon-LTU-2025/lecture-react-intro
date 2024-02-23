import { ChangeEventHandler, FormEventHandler, useState } from "react";

interface ICounterProps {
  count: number;
  handleOnClick: () => void;
  handleOnResetClick: () => void;
  updateCount: (number: number) => void;
}

export function Counter(props: ICounterProps) {
  const [value, setValue] = useState("");

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (value === "") return;

    const number = parseInt(value);
    props.updateCount(number);
  };

  return (
    <div>
      <p>You clicked {props.count} times</p>
      <form onSubmit={handleOnSubmit}>
        <input onChange={handleOnChange} type="number" value={value} />
        <button type="submit">Change count to {value}</button>
      </form>
      <br />
      <button onClick={props.handleOnClick}>Click to increment with 1</button>
      <br />
      <button onClick={props.handleOnResetClick}>Reset to 0</button>
    </div>
  );
}
