interface UserState {
  user: any[];
  loading: boolean;
  error: null | boolean;
}

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
  }
};
