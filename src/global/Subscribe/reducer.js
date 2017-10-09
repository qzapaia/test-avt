import { SUBSCRIPTION_COMPLETE, SET_EMAIL } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  const {type, payload, email} = action;

  switch(type){
    case SUBSCRIPTION_COMPLETE:
      if(payload.state){
        return {
          ...state,
          subscriptionStatus: 'success'
        }
      } else {
        return {
          ...state,
          subscriptionStatus: 'error'
        }
      }
      break;
    case SET_EMAIL:
      return {
        ...state,
        email
      };
      break;
    default:
      return state;
  }
}
