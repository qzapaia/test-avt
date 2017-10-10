import { clone, set, head, has, reduce, isEmpty, forEach } from 'lodash';
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
    infants:0,
    class:'1',
    amountOfTravellers: {state: false,message:''},
    flexibleDates: false,
    destinations:[],
    flights: [
      {
        originCity: '',
        destinationCity: '',
        dates: undefined,
        error: {state: false,message:''}
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
      
      if(originState.leg == 3 && path.indexOf('dates')> -1) {
        switch(path) {
          case 'flights[0].dates':

            if(originState.flights[1] && originState.flights[1].dates && moment(originState.flights[0].dates).isAfter(originState.flights[1].dates)) {
              originState.flights[1].dates = originState.flights[0].dates;
            }

            if(originState.flights[2] && originState.flights[2].dates && moment(originState.flights[0].dates).isAfter(originState.flights[2].dates)) {
              originState.flights[2].dates = originState.flights[0].dates;
            }
          break;
          case 'flights[1].dates':
            if(originState.flights[2] && originState.flights[2].dates && moment(originState.flights[1].dates).isAfter(originState.flights[2].dates)) {
              originState.flights[2].dates = originState.flights[1].dates;
            }
          break;
         }
      }

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
              originCity: '',destinationCity: '', dates: undefined, error: {state: false,message:''}
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


      if( (path == 'adults' || path == 'children' || path == 'infants' ) && (parseInt(originState.adults) + parseInt(originState.children) + parseInt(originState.infants)) > 9 ) {
        originState.amountOfTravellers.state = true;
        originState.amountOfTravellers.message = 'La cantidad de pasajeros no puede ser mayor a 9';
      } else {
        originState.amountOfTravellers.state = false;
        originState.amountOfTravellers.message = '';
      }

      if(path.indexOf('destinationCity') > -1 || path.indexOf('originCity') > -1) {
        forEach(originState.flights, (flight, idx) => {
          
          if(flight.originCity == flight.destinationCity && flight.originCity.length > 0) {
            flight.error.state = true;
            flight.error.message = '¡Desde y Hacia no pueden ser iguales!'
          } else {
            flight.error.state = false;
            flight.error.message = '';
          }
        });
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
         `destinationFromId%5B${idx}%5D=${flight.originCity}&destinationToId%5B${idx}%5D=${flight.destinationCity}&dateFrom%5B${idx}%5D=${moment(dateStart).format("DD-MM-YYYY")}&`;
          if(payload.leg == 1) {
            init += dateEnd;
          }
          return init;
      }, '');

      const url = `/vuelos/av-seleccion-grupo=on&${destinations}isMulticity=${payload.flights.length>1 && 'true'}&round_trip=${(payload.leg == 2) ?'on':''}&adults=${payload.adults}&children=${payload.children}&${(payload.leg == 2 || payload.leg == 3)? 'dateTo=&': ''}babies=${payload.infants}&${(payload.flexibleDates || payload.leg == 3)? 'flexibleDates=on&':''}flightClass=${payload.class == 2 ?'NMO.GBL.SCL.BSN':'NMO.GBL.SCL.ECO'}`;
      
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
            dates: undefined,
            error: {state: false,message:''}
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
