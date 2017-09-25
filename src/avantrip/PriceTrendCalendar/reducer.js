import {
  SET_HISTOGRAM_DATA,
  SET_SELECTED_MONTH
} from './actions';

const initialState = {};

export default (state = initialState, action) => {
  const {type,payload} = action;

  switch(type){
    case SET_HISTOGRAM_DATA:
    case SET_SELECTED_MONTH:
      return {
        ...state,
        payload
      }
      break;
    default:
      return state;
  }
}
