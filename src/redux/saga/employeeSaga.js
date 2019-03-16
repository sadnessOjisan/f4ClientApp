import { call, takeEvery } from "redux-saga/effects";
import { types, actions } from "../module/employee";
import API from "../../services/emploueeAPI";

function* loadSaga(action) {
  const params = action.payload;
  const { payload, error } = yield call(API.fetchEmployee);
  if (payload && !error) {
    yield put(actions.successFetchData(payload));
  } else if (error) {
    yield put(actions.failFetchData(error));
  } else {
    throw new Error("not");
  }
}

export default function* aSaga() {
  // $FlowFixMe
  yield takeEvery(types.LOAD_PAGE, loadSaga);
}
