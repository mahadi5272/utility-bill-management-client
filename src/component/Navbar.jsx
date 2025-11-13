import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router";
import { AuthContext } from "../routes/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  // page load এ previous theme load করা
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const links = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/bills">Bills</Link>
      </li>
      <li>
        <Link to="/registition">SignUp</Link>
      </li>
      <li>
        <button onClick={toggleTheme} className="btn  btn-active">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </li>
    </>
  );

  const links2 = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/bills">Bills</Link>
      </li>
      <li>
        <Link to="/mybills">My Bills</Link>
      </li>
      <li>
        <button onClick={toggleTheme} className="btn  btn-active">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </li>
    </>
  ); 

  const handleSignOut = () => {
    LogOut();
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:justify-end md:gap-5 bg-[url('https://i.ibb.co.com/Txn7DjQS/pngtree-illustrated-circuit-board-abstract-background-with-electronic-elements-perfect-for-technolog.png')] bg-cover bg-no-repeat ">
      <div className="navbar-start md:ml-0">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user ? links2 : links}
          </ul>
        </div>
        <img className="w-[50px] h-12 rounded-xl items-center" src="https://i.ibb.co.com/HL5LHKY7/images-10.jpg" alt="" />
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{user ? links2 : links}</ul>
      </div>

      <div className="flex justify-between   gap-3 items-center">
        <div>
          <Link to="/profile">
            {user && (
              <img
                className="rounded-full w-[50px]"
                src={user?.photoURL}
                alt="User"
              />
            )}
          </Link>
        </div>
        <div>{/* Theme Toggle Button */}</div>

        <div className="flex  gap-2 items-center">
          {user ? (
            <button onClick={handleSignOut} className="btn btn-primary">
              LogOut
            </button>
          ) : (
            <button className="btn btn-primary">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
