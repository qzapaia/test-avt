export const SET_DATA = 'SET_DATA';
export const SET_REPOS = 'SET_REPOS';

export const async getData = id => dispatch => (
  const res = await fetch(`https://api.com/${id}`);
  const data = await res.json()
  dispatch(setData(data));
)

export const setData = data => ({
  type:SET_REPOS,
  payload:data
})
