import { SET_CURRENCY } from './actions';

const initialState = {
  value: "ARS"
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case SET_CURRENCY:
      return {
        ...state,
        value:payload
      }
      break;

    default:
      return state;
  }
}
