import { configureStore } from "@reduxjs/toolkit";

import dummyReducer from "./dummy/dummy.rootReducer";
export const store = configureStore({
  reducer: {
    dummyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// for useSelector it saves you the need to type state:RootState everytime
export type AppDispatch = typeof store.dispatch;
