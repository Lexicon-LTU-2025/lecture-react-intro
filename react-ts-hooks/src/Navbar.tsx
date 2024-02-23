interface INavbarProps {
  count: number;
}

// Destructuring the props object.
export function Navbar({ count }: INavbarProps) {
  return <nav>This count is: {count} in Navbar</nav>;
}
