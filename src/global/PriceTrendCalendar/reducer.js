import {
  SET_SELECTED_MONTH,
  SET_SELECTED_DAY
} from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload, selectedMonth, selectedDay } = action;

  switch (type) {
    case SET_SELECTED_MONTH:
      return {
        ...state,
        selectedMonth
      };
      break;
    case SET_SELECTED_DAY:
      return {
        ...state,
        selectedDay
      };
      break;
    default:
      return state;
  }
};
