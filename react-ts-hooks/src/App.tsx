import { useState } from "react";
import { Counter } from "./Counter";
import { Navbar } from "./Navbar";
import { SignIn } from "./SignIn";

export interface ISignInDetails {
  username: string;
  password: string;
}

function App() {
  const [count, setCount] = useState(23);

  const incrementCount = () => {
    console.log("Clicked");

    // setState method comes in two forms.
    // First form - Updating the state based on the previous value
    setCount((prevVal) => {
      const newVal = prevVal + 1;
      return newVal;
    });
  };

  const resetCount = () => {
    // Second form - Updating state without depending on the previous value]
    setCount(0);
  };

  const updateCount = (number: number) => {
    setCount(number);
  };

  const signInUser = (signInDetails: ISignInDetails) => {
    console.log(signInDetails);
  };

  return (
    <>
      <Navbar count={count} />
      <h1>This is the app component</h1>
      <Counter
        count={count}
        handleOnClick={incrementCount}
        handleOnResetClick={resetCount}
        updateCount={updateCount}
      />
      <SignIn signInUser={signInUser} />
    </>
  );
}

export default App;
