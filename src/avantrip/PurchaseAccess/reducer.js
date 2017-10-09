import {
  SET_PURCHASE,
  SET_ERROR_MESSAGE,
  SET_STATUS
} from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload, errorMessage, status } = action;

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
    case SET_STATUS:
      return {
        ...state,
        status
      };
      break;
    default:
      return state;
  }
};
