import { FACEBOOK_SIGNUP_SET_USER, USER_LOG_OUT } from './actions';

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
    case USER_LOG_OUT:
      return {};
      break;
    default:
      return state;
  }
}
