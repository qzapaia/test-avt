import { SET_REPOS } from './actions';
import mapActionToReducer from 'redux-action-reducer-mapper';

const initialState = {
  repos:[]
};

export default mapActionToReducer({
  default: initialState,
  SET_REPOS: (state, action) => ({
    ...state,
    repos:action.payload
  })
});
