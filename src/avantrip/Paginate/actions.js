
export const SET_PAGES_COUNT = 'GET_PAGES_COUNT';
export const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE';

export const setPagesCount = pagesCount => ({
  type:SET_PAGES_COUNT,
  pagesCount
})

export const setSelectedPage = selectedPage => ({
  type:SET_SELECTED_PAGE,
  selectedPage
})
