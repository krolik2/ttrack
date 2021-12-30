import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBar } from "../features/chartDoughnut/DoughnutSlice";

const taskType = [
  { name: "Production" },
  { name: "Meeting" },
  { name: "Special Project" },
];

export const Counter = () => {
  const [time, setTime] = useState("");
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (time.length > 0 && task !== "") {
      dispatch(
        addBar({
          time: Number(time),
          task,
        })
      );
      setTime("");
      setTask("")
    }
  };

  return (
    <div className="counter">
      <h2 className="sub_title">Utilization:</h2>
      <form className="counter_form" onSubmit={onSubmit}>
        <input
          className="input"
          placeholder="Time(H):"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <select
          name="task"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        >
          <option defaultValue="" hidden>
            Select type of task
          </option>
          {taskType.map((el) => (
            <option key={el.name} value={el.name}>
              {el.name}
            </option>
          ))}
        </select>
        <button type="submit">add</button>
      </form>
    </div>
  );
};
