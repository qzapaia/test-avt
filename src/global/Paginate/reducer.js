import {
  SET_PAGES_COUNT,
  SET_SELECTED_PAGE
} from "./actions";

const initialState = {
  selectedPage: 0
};

export default (state = initialState, action) => {
  const { type, pagesCount, selectedPage } = action;

  switch (type) {
    case SET_PAGES_COUNT:
      return {
        ...state,
        pagesCount
      };
      break;
    case SET_SELECTED_PAGE:
      return {
        ...state,
        selectedPage
      };
      break;
    default:
      return state;
  }
};
