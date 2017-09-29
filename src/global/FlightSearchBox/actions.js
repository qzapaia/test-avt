export const SET_SEARCH = 'SET_SEARCH';
export const SET_SEARCH_BOX_VALUE = 'SET_SEARCH_BOX_VALUE';


export const setSearch = value => ({
  type:SET_SEARCH,
  payload:value
});

export const setSearchBoxValue = value => {
  return {
    type:SET_SEARCH_BOX_VALUE,
    payload:value
  }
}

