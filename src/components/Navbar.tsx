import { IoStatsChart } from "react-icons/io5";
import { Link } from "react-router-dom";

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
        <Link to="/"><li><IoStatsChart className="icon" />Productivity</li></Link>
        {/* <Link to="settings"><li><IoSettings className="icon" />Settings</li></Link> */}
        </ul>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
