export const SET_REPOS = 'FLIGHTS_FILTERS_SET_REPOS';
export const SET_CHANGE = 'FLIGHTS_FILTERS_CHANGE';
export const SET_EXPAND = 'FLIGHTS_FILTERS_EXPAND';
export const SET_CLEAR = 'FLIGHTS_FILTERS_CLEAR';

export const setChange = (path,change) => ({
  type : SET_CHANGE,
  payload:{
    path,
    change,
  } 
})

export const setClear = id => ({
  type : SET_CLEAR,
  payload: {
    id,
  }
})


