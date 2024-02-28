import { taskData } from "./../data/data";
import { IoAddOutline, IoTrashOutline, IoReloadSharp } from "react-icons/io5";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export const Settings = () => {
  return (
    <div className="charts_container">
    <div className="controls_container">
      <h1 className="heading">Settings</h1>
      <div className="productivity_container">
          <form className="productivity_form">
            <div className="input-container">
            </div>
            <div className="btn-container">
              <button
                className="button button_reset"
              >
                <span className="button_wrapper">
                  <IoReloadSharp className="icon" />
                  Reset
                </span>
              </button>
            </div>
          </form>
        </div>
    </div>
    <div className="content_container">
    </div>
  </div>
  );
};

export default Settings;
