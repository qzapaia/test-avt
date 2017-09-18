import { TRIP_SUBSCRIPTION_COMPLETE } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  const {type , payload} = action;

  switch(type){
    case TRIP_SUBSCRIPTION_COMPLETE:
      return {
        state:payload
      }
      break;
    default:
      return state;
  }
}
