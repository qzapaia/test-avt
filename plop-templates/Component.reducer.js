import { SET_DATA } from './actions';

const initialState = {};

export default const reducer = (state = initialState, action) => {
  switch(action.type){
    case SET_DATA:
      return {
        ...state,
        action.payload
      }
      break;
    default
      return state;
  }
}
