import {
  FEATURED_PRODUCTS_SET_PRODUCTS
} from './actions';

const initialState = {
  products:[]
};

export default (state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch(type){
    case FEATURED_PRODUCTS_SET_PRODUCTS:
      return {
        ...state,
        products:payload
      }
      break;
    default:
      return state;
  }
}
