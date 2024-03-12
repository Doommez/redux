import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { store } from "..";
import { useDispatch } from "react-redux";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
