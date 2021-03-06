import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ChartDoughnut {
  meeting: number[];
  specjelProject: [];
  production: number[];
  datachuj: number[]
}

// const initialState: ChartDoughnut[] = [];

const initialState: ChartDoughnut = {
  production: [],
  meeting: [],
  specjelProject: [],
  datachuj: []
};

export const chartDoughnutSlice = createSlice({
  name: "chartDoughnut",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addBar: (state, action) => {
      // let newBar = {
      //   task: action.payload.task,
      //   time: action.payload.time,
      // };

      if (action.payload.task === "Production") {
        let data = state.datachuj
        data.push(action.payload.time);
        const sum = (a: number, b: number) => {
          return a + b;
        };

        let update = data.reduce(sum, 0)
        
        state.production.push(update);
      }

      if (action.payload.task === "Meeting") {
        let data = []
        data.push(action.payload.time);
        const sum = (a: number, b: number) => {
          return a + b;
        };
        state.meeting.splice(data.reduce(sum, 0));
      }
      // let filteredData = state.filter((el) => el.task === action.payload.task);

      // const sum = (total: number, el: { task: string; time: number }) => {
      //   return total + el.time;
      // };
      // let sumData = filteredData.reduce(sum, 0);
      // console.log(sumData);
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const { addBar } = chartDoughnutSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectChartDoughnut = (state: RootState) => state.chartDoughnut;

export default chartDoughnutSlice.reducer;
