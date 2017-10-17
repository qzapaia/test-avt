export const SET_CURRENCY = 'FLIGHT_RESULT_CURRENCY';

export const getData = id => async dispatch => {
  const res = await fetch('https://api.github.com/users/qzapaia/repos');
  const data = await res.json();
  dispatch(setData(data));
}

export const setCurrency = data => ({
  type:SET_CURRENCY,
  payload:data
})
