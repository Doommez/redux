import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, actions: PayloadAction<IUser[]>) {
      state.isLoading = false;
      state.users = actions.payload;
      state.error = "";
    },
    usersFetchingError(state, actions: PayloadAction<string>) {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

export default userSlice.reducer;
