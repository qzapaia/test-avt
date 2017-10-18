import { reduce, has } from 'lodash';
import moment from 'moment';

export const CREATE_SEARCH = 'CREATE_SEARCH';
export const SET_SEARCH_BOX_VALUE = 'SET_SEARCH_BOX_VALUE';
export const SET_DESTINATION_DATA = 'SET_DESTINATION_DATA';
export const SET_SEARCH_BOX_FLIGHT = 'SET_SEARCH_BOX_FLIGHT';

export const getDestinations = id => dispatch => (
  fetch('https://www.avantrip.com/fkt/getAllDestinations')
  .then(res=>res.json())
  .then(data=>dispatch(setDestinations(data)))
)

export const setSearchBoxflight = leg => ({
  type:SET_SEARCH_BOX_FLIGHT,
  payload: leg
})

export const setDestinations = data => ({
  type:SET_DESTINATION_DATA,
  payload: {destinations:data}
})

export const createSearch = value => (dispatch, getState) => {
  const state = getState();
  let SEODestinations = 'http://avantrip.apps.int.devtrip.com.ar/vuelos/';
  const destinations = reduce(value.flights, (init, flight,idx) => {
    let dateStart = '';
    let dateEnd = '';
    const originCity = find(state.destinations, ['iata_code', flight.originCity]);
    const destinationCity = find(state.destinations, ['iata_code', flight.destinationCity]);

    if(originCity && destinationCity) {
      SEODestinations += `${kebabCase(destinationCity.city)}-desde-${kebabCase(originCity.city)}`;
      if(value.flights.length>1 && idx+1 < value.flights.length) {
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
      if(value.leg == 1) {
        init += dateEnd;
      }
      return init;
  }, '');


  const url = `${SEODestinations}?av-seleccion-grupo=on&${destinations}isMulticity=${value.flights.length>1 && 'true'}&round_trip=${(value.leg == 2) ?'on':''}&adults=${value.adults}&children=${value.children}&${(value.leg == 2 || value.leg == 3)? 'dateTo=&': ''}babies=${value.infants}&${(value.flexibleDates || value.leg == 3)? 'flexibleDates=on&':''}flightClass=${value.class == 1 ?'NMO.GBL.SCL.ECO':'NMO.GBL.SCL.BSN'}`;

  console.log(url)
}

export const setSearchBoxValue = value => {
  return {
    type:SET_SEARCH_BOX_VALUE,
    payload:value
  }
}
