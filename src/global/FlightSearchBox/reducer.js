import { defaultsDeep, clone, set, slice } from 'lodash';
import { 
  SET_SEARCH, 
  SET_SEARCH_BOX_VALUE,
  SET_DESTINATION_DATA,
  SET_SEARCH_BOX_FLIGHT

} from './actions';

const initialState = {
    leg:'1',
    amountTraveller:{adults:1},
    class:'1',
    destinations:[],
    flights: [
      {
        originCity: '',
        destinationCity: ''
      }
    ]
};

export default (state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch(type){
    case SET_DESTINATION_DATA:
      return {
        ...state,
        ...payload
      };
      break;
    case SET_SEARCH_BOX_VALUE:
      const originState = clone(state);
      const path = Object.keys(payload)[0];
      const val = payload[path];
      set(originState, path, val);

      if(path == 'leg' && val == '3') {
        originState.flights.push({
          originCity: '',
          destinationCity: ''
        })
      }

      return originState;
      break;
    case SET_SEARCH:
      console.log(state);
      return {
        ...state,
        ...payload
      }
      break;

    case SET_SEARCH_BOX_FLIGHT:

      const originStateLeg = clone(state);
      if(payload == 'add') {
        if(originStateLeg.flights.length <= 2) {
          originStateLeg.flights.push({
            originCity: '',
            destinationCity: ''
          })
        }
      } else {
        if(originStateLeg.flights.length == 3) {
          originStateLeg.flights.pop();
        } else {
          originStateLeg.leg = '1';
          originStateLeg.flights.pop();
        }
      }
      return {
        ...state,
        ...originStateLeg
      }
      break;
    default:
      return state;
  }
}
