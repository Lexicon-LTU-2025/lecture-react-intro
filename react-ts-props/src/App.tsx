import "./App.css";
import Button from "./Button";
import Navbar from "./Navbar";
import { ILink } from "./interfaces";

function App() {

  
  const links: ILink[] = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "About",
      href: "/about",
    },
    {
      id: 3,
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      <Navbar links={links} />
      <h1 className="header">This is the App component</h1>
      <Button title="Send" outline variant="danger" />
      <Button title="Cancel" variant="danger" />
    </>
  );
}

export default App;
