import homeReducer from 'avantrip-react/avantrip/Home/reducer';
import { reducer as mediaReducer  } from 'avantrip-react/utils/media';

export default ({
  ...homeReducer,
  media:mediaReducer
})
