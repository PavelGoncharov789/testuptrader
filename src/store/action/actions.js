import { createAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const getProjectAction = createAction(actionTypes.GET_PROJECT);

export const addProjectAction = createAction(actionTypes.ADD_PROJECT);

export const addTaskAction = createAction(actionTypes.ADD_TASK);
