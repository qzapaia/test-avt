## Description
Componente para usos sarlanga.

## Basic use

```javascript
import PriceTrendTableByDate from 'avantrip-react/avantrip/PriceTrendTableByDate';

export default () => (
  <PriceTrendTableByDate
    onEvent={function}
    message={string}
    isActive={boolean}
  />
)
```


## Props

#### `onEvent={<Boolean> || <Function>}`
Event handler

#### `isActive={<Boolean>}`
Enable an action within the component


## Redux

#### Actions
```javascript
import { sendData } from 'avantrip-react/avantrip/PriceTrendTableByDate/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import priceTrendTableByDateReducer from 'avantrip-react/avantrip/PriceTrendTableByDate/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  priceTrendTableByDate:priceTrendTableByDateReducer,
  todos
})

const store = createStore(reducer);
// ...
```
