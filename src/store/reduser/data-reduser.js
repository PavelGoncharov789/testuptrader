import * as actionTypes from '../actionTypes';
import initialData from '../../components/initial-data';

const initialState = JSON.parse(localStorage.getItem('project'));

export default function getDataTrduser(state=initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_PROJECT:
      return {
        ...state
      };
    case actionTypes.ADD_PROJECT:
      return {
        ...state,
        [`${action.payload}`] : initialData,
      };
    case actionTypes.ADD_TASK:
      const newProject = action.payload;
      return {
        ...state,
        [`${newProject.project}`]: newProject.data
      }
    default:
      return state;
  }
}
