import React, { ChangeEvent, useCallback } from "react";
import { IoAddOutline } from "react-icons/io5";
import { useAppDispatch } from "../app/hooks";
import {
  editBar,
  getProductivity,
  getTotal,
  getWeight,
} from "../features/chartBars/ChartBarsSlice";

interface ModalProps {
  state: { time: string; volumes: string; task: string };
  setState: React.Dispatch<
    React.SetStateAction<{ time: string; volumes: string; task: string }>
  >;
  toggleModal: () => void;
}

const Modal = ({
  toggleModal,
  state,
  setState,
}: ModalProps) => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      editBar({
        task: state.task,
        time: state.time,
        volumes: Number(state.volumes),
      })
    );
    dispatch(getProductivity(state.task));
    dispatch(getWeight(state.task));
    dispatch(getTotal());
    toggleModal();
  };

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }, [setState, state]);

  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-header-wrapper">
            <h2 className="heading">Edit Task</h2>
            <IoAddOutline className="icon close" onClick={toggleModal} />
          </div>
        </div>
        <div className="modal-sub_header sub_title">{state.task}</div>
        <form className="modal-editable" onSubmit={handleSubmit}>
          <div className="modal-data-container">
          <div className="modal-data">
            <label className="label" htmlFor="volumes">Volumes:</label>
            <input
              className="input modal-input"
              id="volumes"
              name="volumes"
              value={state.volumes}
              onChange={handleChange}
            />
          </div>
          <div className="modal-data">
            <label className="label" htmlFor="time">Time:</label>
            <input
              className="input modal-input"
              id="time"
              name="time"
              value={state.time}
              onChange={handleChange}
            />
          </div>
          </div>
          <div className="modal-btns">
            <button
              type="button"
              className="button button_reset"
              onClick={toggleModal}
            >
              cancel
            </button>
            <button className="button btn-action" type="submit">
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
