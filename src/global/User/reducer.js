import { FACEBOOK_SIGNUP_SET_USER, USER_LOG_OUT } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  const {type,payload} = action;

  switch(type){
    case FACEBOOK_SIGNUP_SET_USER:
    case USER_LOG_OUT:
      return {
        ...state,
        ...payload
      }
      break;
    default:
      return state;
  }
}
