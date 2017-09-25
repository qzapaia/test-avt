export const GET_HISTOGRAM_DATA = 'GET_HISTOGRAM_DATA';
export const SET_HISTOGRAM_DATA = 'SET_HISTOGRAM_DATA';
export const SET_SELECTED_MONTH = 'SET_SELECTED_MONTH';

export const getData = id => dispatch => (
  fetch(`https://api.avantrip.com/deals/histogram?urlPrefix=http%3A%2F%2Fvuelos.apps.stage.devtrip.com.ar%2Fvuelos%2F&origin=BUE&destination=NYC&dateTo=2017-10-08&dateFrom=2017-10-01&dataLayer=true&adults=1&children=0&babies=0&duration=8&minDepartureMonthYear=2017-09&maxDepartureMonthYear=2018-09&minDepartureDate=2017-09-24&maxDepartureDate=2018-09-22`)
  .then(res=>res.json())
  .then(data=>dispatch(setData(data)))
)

export const setData = data => ({
  type:SET_HISTOGRAM_DATA,
  payload:data
})


export const setSelectedMonth = selectedMonth => ({
  type:SET_SELECTED_MONTH,
  payload:selectedMonth
})
