import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../routes/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

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
    </>
  );
  const handleSignOut = () => {
    LogOut();
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user ? links2 : links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{user ? links2 : links}</ul>
      </div>
      <div className="flex justify-between gap-3">
        <div className="]">
          <>
            <Link to="/profile">
              <>
                {" "}
                {user && (
                  <img
                    className="rounded-full w-[50px] "
                    src={user?.photoURL}
                    alt=""
                  />
                )}
              </>
            </Link>
          </>
        </div>
        <div>
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
