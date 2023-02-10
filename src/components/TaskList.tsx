import { useCallback, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import {
  selectChartBars,
  removeBar,
  getTotal,
} from "../features/chartBars/ChartBarsSlice";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import Modal from "./Modal";
import { Data } from "../features/chartBars/ChartBarsSlice";

const TaskList = () => {
  const chartBars = useAppSelector(selectChartBars);
  const dispatch = useAppDispatch();

  const handleDelete = (task: string) => {
    dispatch(removeBar(task));
    dispatch(getTotal());
  };

  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState({
    time: "",
    volumes: "",
    task: "",
  });

  const toggleModal = useCallback(
    (): void => setShowModal(!showModal),
    [showModal]
  );

  const editData = (el: Data) => {
    setState({
      ...state,
      task: el.task,
      time: el.time,
      volumes: el.volumes.toString(),
    });
    toggleModal();
  };

  return (
    <>
      <div className="productivity"></div>
      <h2 className="sub_title">Task list:</h2>
      <div className="task_list">
        {chartBars.data.length ? (
          chartBars.data.map((el) => (
            <div className="task_item" key={el.task}>
              <div className="task_text" onClick={() => editData(el)}>
                <div className="task_item_title">{el.task}</div>
                <div className="task_item_time">{`Time: ${el.time} h`}</div>
                <div className="task_item_volumes">{`Volumes: ${el.volumes}`}</div>
              </div>
              <div className="btn-container">
                <button
                  className="action-btn"
                  onClick={() => handleDelete(el.task)}
                >
                  <IoCloseOutline className="icon" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="message">
            <h2 className="sub_title">
              There are currently no tasks on your list... add something :)
            </h2>
          </div>
        )}
      </div>
      {showModal && (
        <Modal toggleModal={toggleModal} state={state} setState={setState} />
      )}
    </>
  );
};

export default TaskList;
