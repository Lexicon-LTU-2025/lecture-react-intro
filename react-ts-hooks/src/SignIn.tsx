import { CSSProperties, FormEventHandler, useState } from "react";
import { ISignInDetails } from "./App";

interface ISignInProps {
  signInUser: (signInDetails: ISignInDetails) => void;
}

export function SignIn(props: ISignInProps): React.ReactElement {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const styles: CSSProperties = { marginTop: "2rem" };

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const singInDetails: ISignInDetails = {
      username,
      password,
    };

    props.signInUser(singInDetails);
  };

  return (
    <form onSubmit={handleOnSubmit} style={styles}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          value={username}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
