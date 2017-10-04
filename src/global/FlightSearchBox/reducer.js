import { clone, set, head, has, reduce, includes } from 'lodash';
import moment from 'moment';
import { 
  SET_SEARCH, 
  SET_SEARCH_BOX_VALUE,
  SET_DESTINATION_DATA,
  SET_SEARCH_BOX_FLIGHT

} from './actions';

const initialState = {
    leg:'1',
    adults:1,
    children:0,
    infant:0,
    class:'1',
    flexibleDates: false,
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

      // if(includes(val, 'dates')) {
      if(has(val, 'startDate')) {
        console.log(val);
        console.log(originState);
        originState.flights[0].date = val.startDate;
      }

      if(path == 'leg' && val == '3') {
        originState.flights.length < 2 && originState.flights.push({originCity: '',destinationCity: '', dates: originState.flights[0].dates.endDate});
        originState.flights[0].dates = originState.flights[0].dates.startDate;
      } else if(path == 'leg' && val != '3') {
        if(originState.flights.length >= 2) {
          originState.flights = [head(originState.flights)];
        }
      }

      return originState;
      break;

    case SET_SEARCH:
      const destinations = reduce(payload.flights, (init, flight) => {
        let dateStart = '';
        let dateEnd = '';
        if(has(flight.dates, 'startDate')) {
          dateStart = flight.dates.startDate;
          dateEnd = `dateTo=${moment(flight.dates.endDate).format("DD-MM-YYYY")}`;
        } else {
          dateStart = flight.dates;
        }

        return init +=
         `destinationFromId=${flight.originCity}&
          destinationToId=${flight.destinationCity}&
          dateFrom=${moment(dateStart).format("DD-MM-YYYY")}&
          ${dateEnd}`;
      }, '');

      const url = `/vuelos/av-seleccion-grupo=on&
                      ${destinations}
                      isMulticity=${payload.flights.length>1 && 'true'}&
                      round_trip=${payload.leg == 2 ?'on':''}&
                      adults=${payload.adults}&
                      children=${payload.children}&
                      babies=${payload.infant}&
                      flexibleDates=${payload.flexibleDates && 'on'}
                      flightClass=${payload.class == 2 ?'NMO.GBL.SCL.BSN':'NMO.GBL.SCL.ECO'}`;
      
      console.log(url)

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
            destinationCity: '',
            dates: originStateLeg.flights[0].dates.endDate
          })
          originStateLeg.flights[0].dates = originStateLeg.flights[0].dates.startDate
        }
      } else if(originStateLeg.flights.length == 3) {
          originStateLeg.flights.pop();
        } else {
          originStateLeg.leg = '1';
          originStateLeg.flights = [head(originStateLeg.flights)];
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
