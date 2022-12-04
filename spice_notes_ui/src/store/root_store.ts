import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root_reducer";
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
// for useSelector it saves you the need to type state:RootState everytime
export type AppDispatch = typeof store.dispatch;
