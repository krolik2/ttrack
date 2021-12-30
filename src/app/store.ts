import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import chartBarsReducer from "../features/chartBars/ChartBarsSlice";
import doughnutChartReducer from "../features/chartDoughnut/DoughnutSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chartBars: chartBarsReducer,
    chartDoughnut: doughnutChartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
