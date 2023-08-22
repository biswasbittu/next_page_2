import { Link, NavLink } from "react-router-dom";
import { BoltIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <nav className="bg-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/">
          <div className="inline-flex items-center text-2xl font-bold">
            <BoltIcon className="h-7 w-7 text-blue-600" />
            <span className="ml-2 tracking-wide text-gray-500">nextPage</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="items-center hidden space-x-8 md:flex font-semibold">
          <li>
            <NavLink
              to="/"
              className={(isActive) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={(isActive) => (isActive ? "active" : "")}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(isActive) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
