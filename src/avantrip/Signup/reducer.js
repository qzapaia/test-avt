import { FACEBOOK_SIGNUP_SET_USER } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  const {type,payload} = action;

  switch(type){
    case FACEBOOK_SIGNUP_SET_USER:
      return {
        ...state,
        ...payload
      }
      break;
    default:
      return state;
  }
}
