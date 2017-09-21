import { SET_DATA } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  const {type,payload} = action;

  console.log(action);

  switch(type){
    case SET_DATA:
      return {
        ...state,
        payload
      }
      break;
    default:
      return state;
  }
}
