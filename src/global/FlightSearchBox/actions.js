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

export const createSearch = value => ({
  type:CREATE_SEARCH,
  payload:value
});

export const setSearchBoxValue = value => {
  return {
    type:SET_SEARCH_BOX_VALUE,
    payload:value
  }
}
