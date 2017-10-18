import {
  clone,
  set,
  head,
  has,
  reduce,
  isEmpty,
  forEach,
  find,
  kebabCase
} from 'lodash';
import moment from 'moment';
import mapActionToReducer from 'redux-action-reducer-mapper';
import {
  CREATE_SEARCH,
  SET_SEARCH_BOX_VALUE,
  SET_DESTINATION_DATA,
  SET_SEARCH_BOX_FLIGHT
} from './actions';

import {
  REHYDRATE
} from 'redux-persist/constants'


const initialState = {
  destinations:[],
  values: {
    leg:'1',
    adults:1,
    children:0,
    infants:0,
    class:'1',
    flexibleDates: false,
    flights: [
      {
        originCity: '',
        destinationCity: '',
        dates: undefined
      }
    ]
  },
  errors: {
    amountOfTravellers: '',
    flights: []
  }
};

export default mapActionToReducer({
  default:initialState,
  SET_DESTINATION_DATA(state, {payload, type}){
    return {
      ...state,
      ...payload
    }
  },
  SET_SEARCH_BOX_VALUE(state, {payload, type}){
    let originState = clone(state);
    let path = Object.keys(payload)[0];
    let val = payload[path];

    if(path.indexOf('dates')> -1 && state.values.leg != '1') {
      val = val.startDate;
    }

    set(originState.values, path, val);

    if(originState.values.leg == 3 && path.indexOf('dates')> -1) {
      switch(path) {
        case 'flights[0].dates':

          if(originState.values.flights[1] && originState.values.flights[1].dates && moment(originState.values.flights[0].dates).isAfter(originState.values.flights[1].dates)) {
            originState.values.flights[1].dates = originState.values.flights[0].dates;
          }

          if(originState.values.flights[2] && originState.values.flights[2].dates && moment(originState.values.flights[0].dates).isAfter(originState.values.flights[2].dates)) {
            originState.values.flights[2].dates = originState.values.flights[0].dates;
          }
        break;
        case 'flights[1].dates':
          if(originState.values.flights[2] && originState.values.flights[2].dates && moment(originState.values.flights[1].dates).isAfter(originState.values.flights[2].dates)) {
            originState.values.flights[2].dates = originState.values.flights[1].dates;
          }
        break;
       }
    }

    if(path == 'leg') {
      switch(val) {
        case '1':
          const flightAux = [head(originState.values.flights)];
          delete originState.values.flights;
          originState.values.flights = flightAux;

          if(state.values.flights[0].dates) {
            originState.values.flights[0].dates.startDate = state.values.flights[0].dates
          }
          if(state.values.flights[1] && state.values.flights[1].dates) {
            originState.values.flights[0].dates.endDate = state.values.flights[1].dates
          }

          break
        case '2':
          originState.values.flights = [head(originState.values.flights)];
          if (has(originState.values.flights[0].dates, 'startDate')) {
            const auxDate = originState.values.flights[0].dates.startDate;
            delete originState.values.flights[0].dates.startDate;
            originState.values.flights[0].dates = auxDate;
          } else if(isEmpty(originState.values.flights[0].dates)) {
            originState.values.flights[0].dates = undefined;
          }
          break
        case '3':
          originState.values.flights.length < 2 && originState.values.flights.push({
            originCity: '',destinationCity: '', dates: undefined, error: {state: false,message:''}
          });

          if(state.values.flights[0].dates && state.values.flights[0].dates.endDate) {
            originState.values.flights[1].dates = state.values.flights[0].dates.endDate;
          }

          if(state.values.flights[0].dates && state.values.flights[0].dates.startDate) {
            originState.values.flights[0].dates = state.values.flights[0].dates.startDate;
          }

        break
        default:
          return;
      }
    }

    if(path == 'adults' && val < originState.values.infants) {
      originState.values.infants = val;
    }

    if( (path == 'adults' || path == 'children' || path == 'infants' ) && (parseInt(originState.values.adults) + parseInt(originState.values.children) + parseInt(originState.values.infants)) > 9 ) {
      originState.errors.amountOfTravellers = 'La cantidad de pasajeros no puede ser mayor a 9';
    } else {
      originState.values.amountOfTravellers = '';
    }

    if(path.indexOf('destinationCity') > -1 || path.indexOf('originCity') > -1) {
      forEach(originState.values.flights, (flight, idx) => {
        if(flight.originCity == flight.destinationCity && flight.originCity.length > 0) {
          flight.destinationCity = '';
        }
      });
    }

    return originState;
  },
  SET_SEARCH_BOX_FLIGHT(state, {payload, type}){
    const originStateLeg = clone(state);
    if(payload == 'add') {

      if(originStateLeg.values.flights.length <= 2) {
        originStateLeg.values.flights.push({
          originCity: '',
          destinationCity: '',
          dates: undefined
        })
      }
    } else if(originStateLeg.values.flights.length == 3) {
      originStateLeg.values.flights.pop();
      } else {
        originStateLeg.values.leg = '1';
        originStateLeg.values.flights.pop();

        if(state.values.flights[0].dates) {
          originStateLeg.values.flights[0].dates.startDate = state.values.flights[0].dates;
        }
    }
    return {
      ...state,
      ...originStateLeg
    }
  }
})
