import withData from '../../utils/withData';
import theme from '../styled.theme';
import homeReducer from '../Home/reducer';

export default withData({
  reducers:homeReducer,
  theme:theme,
  apollo:{
    networkInterface:{
      uri:'//product.api.int.devtrip.com.ar/data'
    }
  }
})
