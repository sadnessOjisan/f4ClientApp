// @flow

import { combineReducers } from "redux";
import employee from "./employee";
import sideBar from "./sideBar";

const rootReducer = combineReducers({
  employee,
  sideBar
});

export default rootReducer;
