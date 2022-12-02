import { call } from 'redux-saga/effects';

import projectWatcher from './project-sags';

export default function* rootSaga() {
  yield call(projectWatcher);
}