import withData from '../../utils/withData';
import theme from '../styled.theme';
import homeReducer from '../Home/reducer';
import { persistStore, autoRehydrate } from 'redux-persist'

(typeof window != 'undefined') && (window.global = window);

export default withData({
  theme:theme,
  redux:{
    enhacers:[autoRehydrate()],
    reducers:homeReducer,
  },
  apollo:{
    networkInterface:{
      uri:'//product.api.int.devtrip.com.ar/data'
    }
  }
}, (apollo, redux)=>{
  // solo persiste la key 'search' de redux
  persistStore(redux,{
    whitelist:['search']
  });

  const setResize = () => redux.dispatch({
    type:'UPDATE_SCREEN_SIZE'
  });

  global.addEventListener && global.addEventListener("resize", setResize);
})
