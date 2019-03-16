import { fork, all } from "redux-saga/effects";
import employeeSaga from "./employeeSaga";

function* rootSaga() {
  yield all([fork(employeeSaga)]);
}

export default rootSaga;
