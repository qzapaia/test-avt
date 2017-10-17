import searchReducer from '../FlightSearchBox/reducer';
import purchaseAccessReducer from '../PurchaseAccess/reducer';
import mainLayoutReducer from '../MainLayout/reducer';
import subscribeReducer from '../Subscribe/reducer';

export default {
  search:searchReducer,
  purchaseAccess:purchaseAccessReducer,
  ...mainLayoutReducer,
  subscribe:subscribeReducer,
}
