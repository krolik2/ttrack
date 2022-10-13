import { useState } from "react";
import { IoAddOutline, IoTrashOutline } from "react-icons/io5";
import { BarChart } from "./BarChart";
import { useDispatch, useSelector } from "react-redux";
import {
  addBar,
  getTotal,
  selectChartBars,
  clearData
} from "../features/chartBars/ChartBarsSlice";
import { taskList } from "../data/data";

export const Charts = () => {
  const [time, setTime] = useState("");
  const [volumes, setVolume] = useState("");
  const [task, setTask] = useState("");

  const chartBars = useSelector(selectChartBars);
  const dispatch = useDispatch();

  const calculateProductivity = (task: string) => {
    if (task === "") return 0;
    const currentTask = taskList.find((el) => el.name === task);

    if (currentTask === undefined) return 0;
    const productivity =
      (Number(volumes) / Number(time) / currentTask.targetPerHour) * 100;

    function round() {
      const m = Number((Math.abs(productivity) * 100).toPrecision(15));
      return (Math.round(m) / 100) * Math.sign(productivity);
    }

    return round();
  };

  const calculateWeight = () => {
    if (calculateProductivity(task) === 0) return 0;
    let weight = (calculateProductivity(task) * Number(volumes)) / 100;
    return weight;
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (Number(time) > 0 && Number(volumes) > 0 && task !== "") {
      dispatch(
        addBar({
          time,
          volumes,
          task,
          productivity: calculateProductivity(task),
          weight: calculateWeight(),
        })
      );
      dispatch(getTotal());
      setTime("");
      setVolume("");
      setTask("");
    }
  };

  const handleClick = () => {
    dispatch(clearData());
  }

  return (
    <div className="charts_container">
      <div className="controls_container">
        <h1 className="heading">Calculator</h1>
        <form className="productivity_form" onSubmit={onSubmit}>
        <select
            className="select"
            name="task"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          >
            <option defaultValue="" hidden>
              Pick a task
            </option>
            {taskList.map((el) => (
              <option key={el.name} value={el.name}>
                {el.name}
              </option>
            ))}
          </select>
          <input
            className="input"
            placeholder="Time(H):"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <input
            className="input"
            placeholder="Volumes:"
            value={volumes}
            onChange={(e) => setVolume(e.target.value)}
          />
          <button className="button" type="submit">
          <span className="button_wrapper"><IoAddOutline className="icon" />Add</span>
          </button>
          <button className="button button_reset" onClick={() => handleClick()}><span className="button_wrapper"><IoTrashOutline className="icon" />Reset</span></button>
        </form>
      </div>
      <div className="charts_crapper">
        <div className="productivity"></div>
        <h2 className="sub_title">Total productivity: {chartBars.total}%</h2>
        <div className="chart_wrapper">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;