export const SET_DATA = 'SET_DATA';
export const SET_REPOS = 'SET_REPOS';

export const getData = id => (
  fetch(`https://api.com/${id}`)
  .then(res=>res.json())
  .then(data=>dispatch(setData(data)))
)

export const setData = data => ({
  type:SET_REPOS,
  payload:data
})
