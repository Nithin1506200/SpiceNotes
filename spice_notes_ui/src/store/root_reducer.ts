import { combineReducers } from "@reduxjs/toolkit";

import dummyReducer from "./dummy/dummy.rootReducer";
export const rootReducer = combineReducers({
  dummyReducer,
});
