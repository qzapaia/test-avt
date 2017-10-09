export const SET_REPOS = '{{constantCase componentName}}_SET_REPOS';

export const getData = id => async dispatch => {
  const res = await fetch('https://api.github.com/users/qzapaia/repos');
  const data = await res.json();
  dispatch(setData(data));
  dispatch({type:'TEST_ACTION'});
}

export const setData = data => ({
  type:SET_REPOS,
  payload:data
})
