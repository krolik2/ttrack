import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Data {
  time: string;
  volumes: number;
  task: string;
  productivity: number;
  weight: number;
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
    addBar: (state, action) => {
      const newBar = {
        task: action.payload.task,
        time: action.payload.time,
        volumes: Number(action.payload.volumes),
        productivity: action.payload.productivity,
        weight: action.payload.weight,
      };
      if (!state.data.find((el) => el.task.includes(action.payload.task))) {
        state.data.push(newBar);
      }
      console.log(state.data);
    },
    getTotal: (state) => {
      const sumProd = (total: number, el: { volumes: number }) => {
        return total + el.volumes;
      };

      const sumWeight = (total: number, el: { weight: number }) => {
        return total + el.weight;
      };

      let totalWeight = state.data.reduce(sumWeight, 0);
      let totalProductivity = state.data.reduce(sumProd, 0);

      state.total = ((totalWeight / totalProductivity) * 100).toFixed(2);
      console.log(state.total);
    },
    clearData: (state) => {
      state.data = [];
      state.total = "";
    },
  },
});

export const { addBar, getTotal, clearData } = chartBarsSlice.actions;
export const selectChartBars = (state: RootState) => state.chartBars;
export default chartBarsSlice.reducer;
