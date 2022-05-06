import { combineReducers } from "redux";
import listReducer from "./list/listReducer";

const rootReducer = combineReducers({
  list: listReducer,
  //   com:
});
export default rootReducer;
