import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes';
import initialData from '../../components/initial-data';

function* saveProject(action) {
  try {
    const state = yield JSON.parse(localStorage.getItem('project'));
    yield localStorage.setItem('project', JSON.stringify({...state, [`${action. payload}`] : initialData}))
  } catch (e) {
    console.log(e);
  }
}

function* saveTask(action) {
  const newProject = action.payload;
  try {
    const state = yield JSON.parse(localStorage.getItem('project'));
    yield localStorage.setItem('project', JSON.stringify({...state, [`${newProject.project}`]: newProject.data}))
  } catch (e) {
    console.log(e);
  }
}

export default function* projectWatcher() {
  yield takeLatest(actionTypes.ADD_PROJECT, saveProject);
  yield takeLatest(actionTypes.ADD_TASK, saveTask);
}
