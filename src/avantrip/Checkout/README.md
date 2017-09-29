## Description
Componente para usos sarlanga.

## Basic use

```javascript
import Checkout from 'avantrip-react/avantrip/Checkout';

export default () => (
  <Checkout
    values={string}
  />
)
```


## Props

#### `values={<String>}`
paramentro string con formato json escapeado


## Redux

#### Actions
```javascript
import { sendData } from 'avantrip-react/avantrip/Checkout/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import checkoutReducer from 'avantrip-react/avantrip/Checkout/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  checkout:checkoutReducer,
})

const store = createStore(reducer);
// ...
```
