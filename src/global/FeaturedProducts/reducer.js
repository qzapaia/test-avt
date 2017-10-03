import {
  FEATURED_PRODUCTS_SET_BESTSELLERS,
  FEATURED_PRODUCTS_SET_PROMOTIONALFLIGHTS
} from './actions';

const initialState = {
  bestsellers:[],
  promotionalFlights: []
};

export default (state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch(type){
    case FEATURED_PRODUCTS_SET_BESTSELLERS:
      return {
        ...state,
        bestsellers:payload
      }
      break;
    case FEATURED_PRODUCTS_SET_PROMOTIONALFLIGHTS:
      return {
        ...state,
        promotionalFlights:payload
      }
      break;
    default:
      return state;
  }
}
