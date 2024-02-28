import { useState } from "react";
import { IoStatsChart, IoSettings, IoListSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("productivity");

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
            <li
              className="nav-item"
              onClick={() => setSelectedTab("productivity")}
            >
              <NavLink to="/">
                <IoStatsChart className="icon"></IoStatsChart>Productivity
              </NavLink>
              {selectedTab === "productivity" ? (
                <motion.div
                  className="underline"
                  layoutId="underline"
                  transition={{ type: "spring" }}
                />
              ) : null}
            </li>
            {/* <li
              className="nav-item"
              onClick={() => setSelectedTab("manage-tasks")}
            >
              <NavLink to="manage-tasks">
                <IoListSharp className="icon" />
                Manage Tasks
              </NavLink>
              {selectedTab === "manage-tasks" ? (
                <motion.div
                  className="underline"
                  layoutId="underline"
                  transition={{ type: "spring" }}
                />
              ) : null}
            </li>
            <li className="nav-item" onClick={() => setSelectedTab("settings")}>
              <NavLink to="settings">
                <IoSettings className="icon" />
                Settings
              </NavLink>
              {selectedTab === "settings" ? (
                <motion.div
                  className="underline"
                  layoutId="underline"
                  transition={{ type: "spring" }}
                />
              ) : null}
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
