import {
  SET_PURCHASE,
  SET_ERROR_MESSAGE
} from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload, errorMessage } = action;

  switch (type) {
    case SET_PURCHASE:
      return {
        ...state,
        ...payload
      };
      break;
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage
      };
      break;
    default:
      return state;
  }
};
