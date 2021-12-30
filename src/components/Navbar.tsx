import { IoStatsChart } from "react-icons/io5";

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
      </div>
      <div className="navbar_icons_wrapper">
      <nav className="navbar_icons_container">
        <ul> 
        <li><IoStatsChart className="icon" />Productivity</li>
        {/* <li><IoPieChart className="icon" />Utilization</li> */}
        {/* <IoCalendarNumber className="icon" /> */}
        {/* <li><IoSettings className="icon" />Settings</li> */}
        </ul>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
