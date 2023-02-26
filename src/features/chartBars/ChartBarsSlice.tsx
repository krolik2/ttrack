import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { taskData } from "../../data/data";

export interface Data {
  time: string;
  volumes: number;
  task: string;
  productivity: number;
  weight: number;
  color: string;
}

interface ChartBars {
  data: Data[];
  total: string;
}

const initialState: ChartBars = {
  data: [],
  total: "",
};

export const chartBarsSlice = createSlice({
  name: "chartBars",
  initialState,
  reducers: {
    addBar: (state, { payload }) => {
      state.data.push(payload);
    },
    removeBar: (state, { payload }) => {
      state.data = state.data.filter((el) => el.task !== payload);
    },
    editBar: (state, { payload }) => {
      state.data = state.data.map((el) => {
        if (el.task === payload.task) {
          return {
            ...el,
            volumes: payload.volumes,
            time: payload.time,
          };
        }
        return el;
      });
      let editedBar = state.data.find((el) => el.task === payload);
      if (editedBar) {
        editedBar.volumes = payload.volumes;
        editedBar.time = payload.time;
      }
    },
    calculateTotal: (state, { payload }) => {
      if (state.data.length < 1) {
        state.total = "0";
      } else {
        state.total = payload;
      }
    },
    calculateProductivity: (state, { payload }) => {
      let editedBar = state.data.find((el) => el.task === payload.task);
      if (editedBar) {
        editedBar.productivity = payload.productivity;
      }
    },
    calculateWeight: (state, { payload }) => {
      let editedBar = state.data.find((el) => el.task === payload.task);
      if (editedBar) {
        editedBar.weight = payload.weight;
      }
    },
    getRandomColor: (state, { payload }) => {
      let editedBar = state.data.find((el) => el.task === payload.task);
      if (editedBar) {
        editedBar.color = payload.color;
      }
    },
    clearData: (state) => {
      state.data = [];
      state.total = "";
    },
  },
});

export const getProductivity =
  (task: string) => (dispatch: any, getState: any) => {
    const currentState = getState().chartBars;
    const taskToUpdate = currentState.data.find((el: any) => el.task === task);
    if (task === "") return 0;
    const selectedTask = taskData.find((el) => el.name === task);

    if (selectedTask === undefined) return 0;
    const productivity =
      (Number(taskToUpdate.volumes) /
        Number(taskToUpdate.time) /
        selectedTask.targetPerHour) *
      100;

    function round() {
      const m = Number((Math.abs(productivity) * 100).toPrecision(15));
      return (Math.round(m) / 100) * Math.sign(productivity);
    }
    const result = { ...taskToUpdate, productivity: round() };

    dispatch(calculateProductivity(result));
  };

export const getWeight = (task: string) => (dispatch: any, getState: any) => {
  const currentState = getState().chartBars;
  const taskToUpdate = currentState.data.find((el: any) => el.task === task);
  if (taskToUpdate.productivity === 0) return 0;
  let weight = (taskToUpdate.productivity * Number(taskToUpdate.volumes)) / 100;
  const result = { ...taskToUpdate, weight: weight };
  dispatch(calculateWeight(result));
};

export const getTotal = () => (dispatch: any, getState: any) => {
  const currentState = getState().chartBars.data;

  let totalWeight = currentState.reduce(
    (prev: any, next: any) => prev + next.weight,
    0
  );

  let totalVol = currentState.reduce(
    (prev: any, next: any) => prev + next.volumes,
    0
  );

  let total = ((totalWeight / totalVol) * 100).toFixed(2);

  dispatch(calculateTotal(total));
};

let colors = [
  "#3744BD",
  "#8709E0",
  "#F7027D",
  "#E03909",
  "#FC980A",
  "#24F26D",
  "#26FCAE",
  "#2EE6D6",
  "#26D5FC",
];

const usedColors: string[] = [];

export const randomColor = (task: string) => (dispatch: any, getState: any) => {
  const currentState = getState().chartBars;
  const taskToUpdate = currentState.data.find((el: any) => el.task === task);

  function randomNoRepeats(array: string[]) {
    return function () {
      let remainingColors = array.filter(
        (color) => !usedColors.includes(color)
      );
      if (remainingColors.length === 0) {
        usedColors.length = 0;
        remainingColors = array;
      }
      const index = Math.floor(Math.random() * remainingColors.length);
      const item = remainingColors[index];
      usedColors.push(item);
      return item;
    };
  }

  let chooser = randomNoRepeats(colors);

  const result = { ...taskToUpdate, color: chooser() };
  dispatch(getRandomColor(result));
};

export const {
  addBar,
  editBar,
  calculateProductivity,
  clearData,
  calculateTotal,
  removeBar,
  calculateWeight,
  getRandomColor,
} = chartBarsSlice.actions;
export const selectChartBars = (state: RootState) => state.chartBars;
export default chartBarsSlice.reducer;
