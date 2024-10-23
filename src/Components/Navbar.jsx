import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkClasses = "px-3 py-2 text-gray-700 hover:text-blue-500";
  const activeLinkClass = "text-blue-500 font-semibold";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <NavLink
          to="/"
          className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
        >
          XeroBlogs
        </NavLink>

        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-4">
            {["Home", "About", "Blogs"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : item.toLowerCase()}
                  className={({ isActive }) =>
                    `${linkClasses} ${isActive ? activeLinkClass : ""}`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block">
          <NavLink
            to="/contact"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Blog
          </NavLink>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-8 6h8"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-md absolute right-0 mt-2 w-48 rounded-lg">
          <ul className="flex flex-col space-y-2 p-4">
            {["Home", "About", "Blogs"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item.toLowerCase()}
                  className={({ isActive }) =>
                    `${linkClasses} ${isActive ? activeLinkClass : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                className="block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center"
                onClick={() => setIsOpen(false)}
              >
                Add Blog
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
