import withData from '../../utils/withData';
import theme from '../styled.theme';
import homeReducer from '../Home/reducer';

(typeof window != 'undefined') && (window.global = window)

export default withData({
  reducers:homeReducer,
  theme:theme,
  apollo:{
    networkInterface:{
      uri:'//product.api.int.devtrip.com.ar/data'
    }
  }
}, (apollo, redux)=>{
  const setResize = () => redux.dispatch({
    type:'UPDATE_SCREEN_SIZE'
  });

  global.addEventListener && global.addEventListener("resize", setResize);
})
