import { SET_HISTOGRAM_DATA } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  const {type,payload} = action;

  switch(type){
    case SET_HISTOGRAM_DATA:
      return {
        ...state,
        payload
      }
      break;
    default:
      return state;
  }
}
