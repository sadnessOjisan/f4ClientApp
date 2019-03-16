// @flow

import { combineReducers } from "redux";
import employee from "./employee";
import sideBar from "./sideBar";
import list from "./list";

const rootReducer = combineReducers({
  employee,
  sideBar,
  list
});

export default rootReducer;
