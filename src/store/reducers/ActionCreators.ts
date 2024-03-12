import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./userSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    setTimeout(() => {
      dispatch(userSlice.actions.usersFetchingSuccess(response.data));
    }, 5000);
  } catch (error) {
    dispatch(userSlice.actions.usersFetchingError("Error"));
  }
};

//TODO закончил на 15:31
