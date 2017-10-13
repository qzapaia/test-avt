import mapActionToReducer from 'redux-action-reducer-mapper';
(typeof window != 'undefined') && (window.global = window)
export const getSize = () => {
  const w = global.innerWidth;

  return (w <= 500 && { size:0,  size_name:'s' }) ||
         (w <= 768 && { size:1,  size_name:'m' }) ||
         (w <= 990 && { size:2,  size_name:'l' }) ||
         (w <= 1280 && { size:3,  size_name:'xl' }) ||
         (w > 1280 && { size:4,  size_name:'xxl' })
         null;
}

export const reducer = mapActionToReducer({
  default: getSize(),
  SET_SCREEN_SIZE: (state, action) => ({
    ...state,
    ...action.payload
  })
});
