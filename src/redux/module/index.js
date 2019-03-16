// @flow

import { combineReducers, type Reducer } from "redux";
import employee from "./employee";
import { type State as AState, type Action as TEmployeeAction } from "./A";

export type TState = {|
  +employee: AState
|};

export type TAction = TEmployeeAction;

const rootReducer: Reducer<TState, TAction> = combineReducers({
  employee
});

export default rootReducer;
