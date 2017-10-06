import { clone, set, head, has, reduce, isEmpty } from 'lodash';
import moment from 'moment';
import { 
  SET_SEARCH, 
  SET_SEARCH_BOX_VALUE,
  SET_DESTINATION_DATA,
  SET_SEARCH_BOX_FLIGHT

} from './actions';
const initialState = {
    leg:'1',
    adults:'1',
    children:0,
    infant:0,
    class:'1',
    flexibleDates: false,
    destinations:[],
    flights: [
      {
        originCity: '',
        destinationCity: '',
        dates: undefined
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
      let originState = clone(state);
      let path = Object.keys(payload)[0];
      let val = payload[path];

      if(path.indexOf('dates')> -1 && state.leg != '1') {
        val = val.startDate;
      }
      set(originState, path, val);

      if(path == 'leg') {
        switch(val) {
          case '1':
            const flightAux = [head(originState.flights)];
            delete originState.flights;
            originState.flights = flightAux;
            
            if(state.flights[0].dates) {
              originState.flights[0].dates.startDate = state.flights[0].dates
            }
            if(state.flights[1] && state.flights[1].dates) {
              originState.flights[0].dates.endDate = state.flights[1].dates
            }
            
            break
          case '2':
            originState.flights = [head(originState.flights)];
            if (has(originState.flights[0].dates, 'startDate')) {
              const auxDate = originState.flights[0].dates.startDate;
              delete originState.flights[0].dates.startDate;
              originState.flights[0].dates = auxDate; 
            } else if(isEmpty(originState.flights[0].dates)) {
              originState.flights[0].dates = undefined;
            }
            break
          case '3':
            originState.flights.length < 2 && originState.flights.push({
              originCity: '',destinationCity: '', dates: undefined
            });

            if(state.flights[0].dates && state.flights[0].dates.endDate) {
              originState.flights[1].dates = state.flights[0].dates.endDate;
            }
            
            if(state.flights[0].dates && state.flights[0].dates.startDate) {
              originState.flights[0].dates = state.flights[0].dates.startDate;
            }

          break
          default:
            return;
        }
      }

      return originState;
      break;

    case SET_SEARCH:
      const destinations = reduce(payload.flights, (init, flight,idx) => {
        let dateStart = '';
        let dateEnd = '';
        if(has(flight.dates, 'startDate')) {
          dateStart = flight.dates.startDate;
          dateEnd = `dateTo=${moment(flight.dates.endDate).format("DD-MM-YYYY")}&`;
        } else {
          dateStart = flight.dates;
        }

        init +=
         `destinationFromId%5B${idx}%5D=${flight.originCity}&
          destinationToId%5B${idx}%5D=${flight.destinationCity}&
          dateFrom%5B${idx}%5D=${moment(dateStart).format("DD-MM-YYYY")}&`;
          if(payload.leg == 1) {
            init += dateEnd;
          }
          return init;
      }, '');

      const url = `/vuelos/av-seleccion-grupo=on&${destinations}isMulticity=${payload.flights.length>1 && 'true'}&
                      round_trip=${(payload.leg == 2) ?'on':''}&adults=${payload.adults}&
                      children=${payload.children}&
                      ${(payload.leg == 2 || payload.leg == 3)? 'dateTo=&': ''}
                      babies=${payload.infant}&${(payload.flexibleDates || payload.leg == 3)? 'flexibleDates=on&':''}
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
            dates: undefined
          })
        }
      } else if(originStateLeg.flights.length == 3) {
        originStateLeg.flights.pop();
        } else {
          originStateLeg.leg = '1';
          originStateLeg.flights.pop();
         
          if(state.flights[0].dates) {
            originStateLeg.flights[0].dates.startDate = state.flights[0].dates;
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
