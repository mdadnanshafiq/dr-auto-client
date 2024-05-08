import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.error(error.message);
      });
  };
  const navlinks = (
    <>
      <NavLink to="/" className="btn btn-ghost">
        Home
      </NavLink>
      <NavLink to="/" className="btn btn-ghost">
        About
      </NavLink>
      <NavLink to="/" className="btn btn-ghost">
        Service
      </NavLink>
      <NavLink to="/" className="btn btn-ghost">
        Blog
      </NavLink>
      <NavLink to="/" className="btn btn-ghost">
        Contact
      </NavLink>
      {user?.email ? (
        <>
          <NavLink to="/bookings" className="btn btn-ghost">
            Bookings
          </NavLink>
          <NavLink className="btn btn-ghost" onClick={handleLogOut}>
            Logout
          </NavLink>
        </>
      ) : (
        <NavLink to="/signin" className="btn btn-ghost">
          Login
        </NavLink>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <Link className=" flex justify-center items-center">
          {/* <img src={logo} alt="" /> */}
          <h1 className="text-3xl font-bold text-orange-500">Dr. Auto</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline text-orange-500 outline-orange-500">
          Appointment
        </a>
      </div>
    </div>
  );
};

export default Nav;
