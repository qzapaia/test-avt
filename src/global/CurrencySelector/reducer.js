import { SET_CURRENCY } from './actions';

const initialState = {
  currency: "ARS"
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case SET_CURRENCY:
      return {
        ...state,
        currency:payload
      }
      break;

    default:
      return state;
  }
}
