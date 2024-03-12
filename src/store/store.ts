import userReducer from "./reducers/userSlice";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
