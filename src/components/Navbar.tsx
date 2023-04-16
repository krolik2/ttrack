import { IoStatsChart, IoSettings, IoListSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_wrapper">
          <h2 className="navbar_logo">
            <span>T</span>
            <span className="navbar_logo_details">Track</span>
          </h2>
        </div>
        <nav className="navbar_icons_wrapper">
          <ul className="navbar_icons_container">
            <li className="nav-item">
              <NavLink to="/">
                <IoStatsChart className="icon"></IoStatsChart>Productivity
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="manage-tasks">
                <IoListSharp className="icon" />
                Manage Tasks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="settings">
                <IoSettings className="icon" />
                Settings
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
