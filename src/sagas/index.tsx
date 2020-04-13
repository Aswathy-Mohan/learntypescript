import { all, fork } from 'redux-saga/effects';
import studentSaga  from '../data/student/studentSaga';

export default function * rootSaga() {
  yield all([fork(studentSaga)]);
};