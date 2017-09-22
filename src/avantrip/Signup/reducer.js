import { FACEBOOK_SIGNUP_COMPLETE } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  const {type,payload} = action;

  console.log(action);

  switch(type){
    case FACEBOOK_SIGNUP_COMPLETE:
      return {
        ...state,
        payload
      }
      break;
    default:
      return state;
  }
}
