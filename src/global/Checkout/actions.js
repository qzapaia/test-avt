export const GET_DATA = 'GET_DATA';
export const SET_REPOS = 'SET_REPOS';

export const getData = id => async dispatch => {
  const res = await fetch('https://api.github.com/users/qzapaia/repos');
  const data = await res.json();
  dispatch(setData(data));
}

export const setData = data => ({
  type:SET_REPOS,
  payload:data
})
