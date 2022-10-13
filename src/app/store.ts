import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import chartBarsReducer from "../features/chartBars/ChartBarsSlice";


export const store = configureStore({
  reducer: {
    chartBars: chartBarsReducer,
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
