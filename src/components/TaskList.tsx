import React from "react";
import {
    IoCloseOutline,
    IoCreateOutline,
  } from "react-icons/io5";

const TaskList = () => {
  return (
    <>
      <div className="productivity"></div>
      <h2 className="sub_title">Task list:</h2>
      <div className="task_list">
        <div className="task_item">
          <div className="task_text">
            <div className="task_item_title">
              Attributes Backfill-Description-Bullet Point
            </div>
            <div className="task_item_time">T: 2 h</div>
            <div className="task_item_volumes">V: 300</div>
          </div>
          <div className="btn-container">
            <button className="action-btn">
              <IoCreateOutline className="icon" />
            </button>
            <button className="action-btn">
              <IoCloseOutline className="icon" />
            </button>
          </div>
        </div>
        <div className="task_item">
          <div className="task_text">
            <div className="task_item_title">LeafNodes Backfill-Hardlines</div>
            <div className="task_item_time">T: 9 h</div>
            <div className="task_item_volumes">V: 30</div>
          </div>
          <div className="btn-container">
            <button className="action-btn">
              <IoCreateOutline className="icon" />
            </button>
            <button className="action-btn">
              <IoCloseOutline className="icon" />
            </button>
          </div>
        </div>
        <div className="task_item">
          <div className="task_text">
            <div className="task_item_title">Title Clean Up</div>
            <div className="task_item_time">T: 10.5 h</div>
            <div className="task_item_volumes">V: 2300</div>
          </div>
          <div className="btn-container">
            <button className="action-btn">
              <IoCreateOutline className="icon" />
            </button>
            <button className="action-btn">
              <IoCloseOutline className="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
