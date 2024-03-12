export interface TodoState {
  todos: any[];
  loading: boolean;
  error: boolean | null;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODO = "FETCH_TODO",
  FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
  FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}

export interface TodoFetchActions {
  type: TodoActionTypes.FETCH_TODO;
}

export interface TodoFetchSuccessActions {
  type: TodoActionTypes.FETCH_TODO_SUCCESS;
  payload: any[];
}

export interface TodoFetchErrorActions {
  type: TodoActionTypes.FETCH_TODO_ERROR;
  payload: string;
}

export interface SetTodoPageActions {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodoActions =
  | TodoFetchActions
  | TodoFetchSuccessActions
  | TodoFetchErrorActions
  | SetTodoPageActions;
