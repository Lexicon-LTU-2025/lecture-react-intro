import {
  useEffect,
  useState,
  type ChangeEventHandler,
  type FormEventHandler,
  type ReactElement,
} from 'react';

export const Name = (): ReactElement => {
  const [name, setName] = useState('Niklas');

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    setName(event.target.value);
  };

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log('Form submitted');

    const obj = {
      name,
    };

    console.log(obj);
  };

  // Ignore this for the moment. It just shows when the components i being rendered OR rerendered.
  useEffect(() => {
    console.log('Name component was rendered');
  });

  return (
    <div className="name">
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="">Name</label>
        <input onChange={handleOnChange} type="text" value={name} />
        <button type="submit">Update name</button>
      </form>
      <h2>My name is: {name}</h2>
    </div>
  );
};
