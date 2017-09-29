export const GET_HISTOGRAM_DATA = 'GET_HISTOGRAM_DATA';
export const SET_HISTOGRAM_DATA = 'SET_HISTOGRAM_DATA';
export const SET_SELECTED_MONTH = 'SET_SELECTED_MONTH';
export const SET_SELECTED_DAY = 'SET_SELECTED_DAY';

export const getData = id => dispatch => (
  fetch(`https://api.avantrip.com/deals/histogram?urlPrefix=http%3A%2F%2Fvuelos.apps.stage.devtrip.com.ar%2Fvuelos%2F&origin=${id.origin}&destination=${id.destination}&dateTo=${id.dateTo}&dateFrom=${id.dateFrom}&dataLayer=${id.dataLayer}&adults=${id.adults}&children=${id.children}&babies=${id.babies}&duration=${id.duration}&minDepartureMonthYear=${id.minDepartureMonthYear}&maxDepartureMonthYear=${id.maxDepartureMonthYear}&minDepartureDate=${id.minDepartureDate}&maxDepartureDate=${id.maxDepartureDate}`)
  .then(res=>res.json())
  .then(data=>dispatch(setData(data)))
)

export const setData = data => ({
  type:SET_HISTOGRAM_DATA,
  payload:data
})

export const setSelectedMonth = selectedMonth => ({
  type:SET_SELECTED_MONTH,
  selectedMonth:selectedMonth
})

export const setSelectedDay = selectedDay => ({
  type:SET_SELECTED_DAY,
  selectedDay:selectedDay
})