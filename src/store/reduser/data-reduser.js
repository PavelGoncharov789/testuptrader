import * as actionTypes from '../actionTypes';
import initialData from '../../components/initial-data';

const initialState = JSON.parse(localStorage.getItem('project'));
console.log("initialState", initialState);

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
    // case actionTypes.GET_NEWS_FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //     newsList: [],
    //     error: action.payload,
    //   };
    // case actionTypes.ADD_NEWS:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null,
    //   };
    // case actionTypes.ADD_NEWS_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: null,
    //   };
    // case actionTypes.ADD_NEWS_FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
}
