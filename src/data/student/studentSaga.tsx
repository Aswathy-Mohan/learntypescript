import { takeLatest, put, all } from "redux-saga/effects";
import * as actionTypes from "./studentActions";
import * as actionCreators from "./studentActionCreator";

function * addNewStudent({student}:actionTypes.ADDSTUDENTREQUESTACTION){
   yield put(actionCreators.addStudentSuccess(student));
}

function* studentActionWatcher() {
    yield takeLatest(actionTypes.ADD_STUDENT_REQUESTED, addNewStudent);
}
  
  export default function* studentSaga() {
    yield all([studentActionWatcher()]);
  }