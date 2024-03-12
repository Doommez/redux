import { bindActionCreators } from "redux";
import { useAppDispatch } from "../store/reducers";
import ActionsCreators from "../store/action-creators";
export const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(ActionsCreators, dispatch);
};
