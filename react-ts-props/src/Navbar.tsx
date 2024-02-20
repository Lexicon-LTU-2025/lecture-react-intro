import { ILink } from "./interfaces";

interface INavbarProps {
  links: ILink[];
}

// function Navbar(props: INavbarProps): JSX.Element {
function Navbar({ links }: INavbarProps): JSX.Element {
  return (
    <nav>
      {links.map((link) => {
        return (
          <a key={link.id} href={link.href}>
            {link.name}
          </a>
        );
      })}
    </nav>
  );
}

export default Navbar;
