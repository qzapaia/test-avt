import purchaseAccessReducer from '../PurchaseAccess/reducer';
import userNavReducer from "../UserNav/reducer";

export default {
  purchaseAccess: purchaseAccessReducer,
  ...userNavReducer
}
