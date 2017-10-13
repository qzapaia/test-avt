import homeReducer from 'avantrip-react/avantrip/Home/reducer';
// import { reducer as media  } from 'avantrip-react/utils/media';

export default ({
  ...homeReducer,
  media:()=>({size:4, size_name:'m'})
})
