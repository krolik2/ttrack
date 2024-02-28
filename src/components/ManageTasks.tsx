import { taskData } from "./../data/data";
import { IoAddOutline, IoTrashOutline, IoReloadSharp } from "react-icons/io5";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { TbArrowsDownUp } from "react-icons/tb";

export const ManageTasks = () => {
  return (
    <div className="content-manage_tasks">
      <div className="controls_container">
        <h1 className="heading">Manage Tasks</h1>
          <form className="productivity_form">
            <div className="input-container">
              <input
                className="input input_big"
                placeholder="Search:"
                name="search"
              />
            </div>
            <div className="btn-container">
              <button className="button btn-action" type="submit">
                <span className="button_wrapper">
                  <HiOutlineMagnifyingGlass className="icon" />
                  Filter
                </span>
              </button>
              <button className="button button_reset">
                <span className="button_wrapper">
                  <TbArrowsDownUp className="icon" />
                  Sort
                </span>
              </button>
            </div>
          </form>
      </div>
      <div className="list_header">
        <div className="list_header-item">
          <span className="task_item_title">name</span>
          <span className="task_item_time">target per hour</span>
        </div>
        <div className="list_header-item">
          <span className="task_item_title">name</span>
          <span className="task_item_time">target per hour</span>
        </div>
      </div>
      <div className="task_list wide">
        {taskData.length ? (
          taskData.map((el) => (
            <div className="manage_task_item border-none half-width" key={el.id}>
              <div className="task_text">
                <div className="task_item_title">{el.name}</div>
                <div className="task_item_time">{el.targetPerHour}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="message">
            <h3 className="sub_title smaller">
              There are currently no tasks on your list... add something :)
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageTasks;
