import {
  SUBSCRIPTION_COMPLETE,
  SUBSCRIPTION_SET_EMAIL,
} from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBSCRIPTION_SET_EMAIL:
    case SUBSCRIPTION_COMPLETE:
      return {
        ...state,
        ...payload
      };
      break;
    default:
      return state;
  }
};
