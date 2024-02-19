import "./Navbar.css";

export function Navbar() {
 const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="navbar">
      {links.map((link) => {
        return (
          <a key={link.id} href={link.path}>
            {link.name}
          </a>
        );
      })}
    </nav>
  );
}
