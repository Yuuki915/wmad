import { combineReducers } from "redux";
import listReducer from "./reducers/listReducer";
import flightReducer from "./reducers/flightReducer";

const rootReducer = combineReducers({
  list: listReducer,
  flight: flightReducer,
});
export default rootReducer;
