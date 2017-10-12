import { clone, set, head, has, reduce, isEmpty, forEach, find, kebabCase } from 'lodash';
import moment from 'moment';
import { 
  CREATE_SEARCH, 
  SET_SEARCH_BOX_VALUE,
  SET_DESTINATION_DATA,
  SET_SEARCH_BOX_FLIGHT

} from './actions';
const initialState = {
  destinations:[],  
  value: {
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

      if(path.indexOf('dates')> -1 && state.value.leg != '1') {
        val = val.startDate;
      }

      set(originState.value, path, val);

      if(originState.value.leg == 3 && path.indexOf('dates')> -1) {
        switch(path) {
          case 'flights[0].dates':

            if(originState.value.flights[1] && originState.value.flights[1].dates && moment(originState.value.flights[0].dates).isAfter(originState.value.flights[1].dates)) {
              originState.value.flights[1].dates = originState.value.flights[0].dates;
            }

            if(originState.value.flights[2] && originState.value.flights[2].dates && moment(originState.value.flights[0].dates).isAfter(originState.value.flights[2].dates)) {
              originState.value.flights[2].dates = originState.value.flights[0].dates;
            }
          break;
          case 'flights[1].dates':
            if(originState.value.flights[2] && originState.value.flights[2].dates && moment(originState.value.flights[1].dates).isAfter(originState.value.flights[2].dates)) {
              originState.value.flights[2].dates = originState.value.flights[1].dates;
            }
          break;
         }
      }
      
      if(path == 'leg') {
        switch(val) {
          case '1':
            const flightAux = [head(originState.value.flights)];
            delete originState.value.flights;
            originState.value.flights = flightAux;
            
            if(state.value.flights[0].dates) {
              originState.value.flights[0].dates.startDate = state.value.flights[0].dates
            }
            if(state.value.flights[1] && state.value.flights[1].dates) {
              originState.value.flights[0].dates.endDate = state.value.flights[1].dates
            }
            
            break
          case '2':
            originState.value.flights = [head(originState.value.flights)];
            if (has(originState.value.flights[0].dates, 'startDate')) {
              const auxDate = originState.value.flights[0].dates.startDate;
              delete originState.value.flights[0].dates.startDate;
              originState.value.flights[0].dates = auxDate; 
            } else if(isEmpty(originState.value.flights[0].dates)) {
              originState.value.flights[0].dates = undefined;
            }
            break
          case '3':
            originState.value.flights.length < 2 && originState.value.flights.push({
              originCity: '',destinationCity: '', dates: undefined, error: {state: false,message:''}
            });

            if(state.value.flights[0].dates && state.value.flights[0].dates.endDate) {
              originState.value.flights[1].dates = state.value.flights[0].dates.endDate;
            }
            
            if(state.value.flights[0].dates && state.value.flights[0].dates.startDate) {
              originState.value.flights[0].dates = state.value.flights[0].dates.startDate;
            }

          break
          default:
            return;
        }
      }

      if(path == 'adults' && val < originState.value.infants) {
        originState.value.infants = val;
      }

      if( (path == 'adults' || path == 'children' || path == 'infants' ) && (parseInt(originState.value.adults) + parseInt(originState.value.children) + parseInt(originState.value.infants)) > 9 ) {
        originState.errors.amountOfTravellers = 'La cantidad de pasajeros no puede ser mayor a 9';
      } else {
        originState.value.amountOfTravellers = '';
      }

      if(path.indexOf('destinationCity') > -1 || path.indexOf('originCity') > -1) {
        forEach(originState.value.flights, (flight, idx) => {
          if(flight.originCity == flight.destinationCity && flight.originCity.length > 0) {
            flight.destinationCity = '';
          }
        });
      }

      return originState;
      break;

    case CREATE_SEARCH:

      let SEODestinations = 'http://avantrip.apps.int.devtrip.com.ar/vuelos/';
      const destinations = reduce(payload.value.flights, (init, flight,idx) => {
        let dateStart = '';
        let dateEnd = '';
        const originCity = find(payload.destinations, ['iata_code', flight.originCity]);
        const destinationCity = find(payload.destinations, ['iata_code', flight.destinationCity]);

        if(originCity && destinationCity) {
          SEODestinations += `${kebabCase(destinationCity.city)}-desde-${kebabCase(originCity.city)}`;
          if(payload.value.flights.length>1 && idx+1 < payload.value.flights.length) {
            SEODestinations += '-y-';
          }
        }

        if(has(flight.dates, 'startDate')) {
          dateStart = flight.dates.startDate;
          dateEnd = `dateTo=${moment(flight.dates.endDate).format("DD-MM-YYYY")}&`;
        } else {
          dateStart = flight.dates;
        }

        init +=
         `destinationFromId%5B${idx}%5D=${flight.originCity}&destinationToId%5B${idx}%5D=${flight.destinationCity}&dateFrom%5B${idx}%5D=${moment(dateStart).format("DD-MM-YYYY")}&`;
          if(payload.value.leg == 1) {
            init += dateEnd;
          }
          return init;
      }, '');
      

      const url = `${SEODestinations}?av-seleccion-grupo=on&${destinations}isMulticity=${payload.value.flights.length>1 && 'true'}&round_trip=${(payload.value.leg == 2) ?'on':''}&adults=${payload.value.adults}&children=${payload.value.children}&${(payload.value.leg == 2 || payload.value.leg == 3)? 'dateTo=&': ''}babies=${payload.value.infants}&${(payload.value.flexibleDates || payload.value.leg == 3)? 'flexibleDates=on&':''}flightClass=${payload.value.class == 1 ?'NMO.GBL.SCL.ECO':'NMO.GBL.SCL.BSN'}`;
      
      console.log(url)

      return {
        ...state,
        ...payload
      }
      break;

    case SET_SEARCH_BOX_FLIGHT:

      const originStateLeg = clone(state);
      if(payload == 'add') {
        
        if(originStateLeg.value.flights.length <= 2) {
          originStateLeg.value.flights.push({
            originCity: '',
            destinationCity: '',
            dates: undefined,
            error: {state: false,message:''}
          })
        }
      } else if(originStateLeg.value.flights.length == 3) {
        originStateLeg.value.flights.pop();
        } else {
          originStateLeg.value.leg = '1';
          originStateLeg.value.flights.pop();
         
          if(state.value.flights[0].dates) {
            originStateLeg.value.flights[0].dates.startDate = state.value.flights[0].dates;
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
