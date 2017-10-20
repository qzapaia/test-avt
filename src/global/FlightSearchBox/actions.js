import { reduce, has, pick } from 'lodash';
import moment from 'moment';
import Router from 'next/router'
import qs from 'query-string';
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
  const { search:{values, values:{flights}} } = state;

  // const basePath = 'http://avantrip.apps.int.devtrip.com.ar/vuelos/';
  const basePath = '/vuelos';

  const newParams = {
    'av-seleccion-grupo':'on',
    'isMulticity':(flights.length>1),
    'destinationFromId':(flights.map(f=>f.originCity)),
    'destinationToId':(flights.map(f=>f.destinationCity)),
    'round_trip':(value.leg == 1 ? 'on' : ''),
    'dateFrom':(flights.map(f=> moment(value.leg == 3 ? f.dates : f.dates.startDate).format("DD-MM-YYYY"))),
    'dateTo':(value.leg == 1 ? [moment(flights[0].dates.endDate).format("DD-MM-YYYY")] : '' ),
    'adults':value.adults,
    'children':value.children,
    'babies':value.infants,
    'flightClass':(value.class == 1 ?'NMO.GBL.SCL.ECO':'NMO.GBL.SCL.BSN'),
  }

  const queryString = qs.stringify(newParams,{
    arrayFormat:'index'
  });
  console.log(value);
  Router.push(basePath + '?' + queryString)
}

export const setSearchBoxValue = value => {
  return {
    type:SET_SEARCH_BOX_VALUE,
    payload:value
  }
}
