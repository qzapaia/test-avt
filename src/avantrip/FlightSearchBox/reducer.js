import { SET_SEARCH, SET_SEARCH_BOX_VALUE } from './actions';
import { defaultsDeep } from 'lodash';

const initialState = {
    leg:'1',
    amountTraveller:{adults:1},
    class:'1'
};

export default (state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch(type){   
    case SET_SEARCH_BOX_VALUE:
      return {
        ...state,
        ...defaultsDeep({}, payload, state)
      }
      break;
    case SET_SEARCH:
      console.log('busqueda', payload)
      return {
        ...state,
        ...payload
      }
      break;
    default:
      return state;
  }
}
