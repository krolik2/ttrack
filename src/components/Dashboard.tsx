import { useState, useCallback, ChangeEvent } from "react";
import { IoAddOutline, IoReloadSharp } from "react-icons/io5";
import { BarChart } from "./BarChart";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addBar,
  getProductivity,
  clearData,
  getTotal,
  getWeight,
  selectChartBars,
  randomColor,
} from "../features/chartBars/ChartBarsSlice";
import { taskData } from "../data/data";
import TaskList from "./TaskList";

export const Dashboard = () => {
  const [state, setState] = useState({
    time: "",
    volumes: "",
    task: "",
  });

  const chartBars = useAppSelector(selectChartBars);
  const dispatch = useAppDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      Number(state.time) > 0 &&
      Number(state.volumes) > 0 &&
      state.task !== "" &&
      !chartBars.data.find((el) => el.task.includes(state.task))
    ) {
      dispatch(
        addBar({
          time: state.time,
          volumes: Number(state.volumes),
          task: state.task,
          productivity: 0,
          weight: 0,
          color: null,
        })
      );
      dispatch(getProductivity(state.task));
      dispatch(getWeight(state.task));
      dispatch(randomColor(state.task));
      dispatch(getTotal());
      setState({
        ...state,
        time: "",
        volumes: "",
        task: "",
      });
    }
  };

  const handleClick = () => {
    dispatch(clearData());
  };

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
      let value = e.target.value;
      setState({
        ...state,
        [e.target.name]: value,
      });
    },
    [state]
  );

  return (
    <div className="content">
        <h1 className="heading">Calculator</h1>
        <form className="productivity_form" onSubmit={onSubmit}>
          <div className="input-container">
            <select
              className="select"
              name="task"
              id="task"
              value={state.task}
              onChange={handleChange}
            >
              <option defaultValue="" hidden>
                Pick a task
              </option>
              {taskData.map((el) => (
                <option key={el.name} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
            <input
              className="input"
              placeholder="Time(H):"
              name="time"
              value={state.time}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Volumes:"
              name="volumes"
              value={state.volumes}
              onChange={handleChange}
            />
          </div>
          <div className="btn-container">
            <button className="button btn-action" type="submit">
              <span className="button_wrapper">
                <IoAddOutline className="icon" />
                Add
              </span>
            </button>
            <button
              className="button button_reset"
              onClick={() => handleClick()}
            >
              <span className="button_wrapper">
                <IoReloadSharp className="icon" />
                Reset
              </span>
            </button>
          </div>
        </form>
        <div className="sub_title_left">
          <h2 className="sub_title">Total productivity: {chartBars.total}%</h2>
        </div>
        <div className="sub_title_right">
          <h2 className="sub_title">Task list:</h2>
        </div>
        <div className="charts_left">
            <BarChart />
        </div>
        <div className="charts_right">
          <TaskList />
        </div>
    </div>
  );
};

export default Dashboard;
