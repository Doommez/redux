import userReducer from "./reducers/userSlice";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../service/postApi";

const rootReducer = combineReducers({
  user: userReducer,
  [postApi.reducerPath]: postApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) => {
      return getDefaultMiddleWare().concat(postApi.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
