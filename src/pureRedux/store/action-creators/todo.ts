import { Dispatch } from "redux";
import axios from "axios";
import { TodoActionTypes, TodoActions } from "../../components/types/todo";

export const fetchTodos = (page = 1, limit: 10) => {
  return async (dispatch: Dispatch<TodoActions>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODO });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: {
            _limit: limit,
            _page: page,
          },
        }
      );
      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODO_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch (e) {
      dispatch({ type: TodoActionTypes.FETCH_TODO_ERROR, payload: "error" });
    }
  };
};

export function setTodoPage(page: number): TodoActions {
  return {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: page,
  };
}
