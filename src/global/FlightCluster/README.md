## Description
Componente para usos sarlanga.

## Basic use

```javascript
import FlightCluster from 'avantrip-react/global/FlightCluster';

export default () => (
  <FlightCluster
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
import { sendData } from 'avantrip-react/global/FlightCluster/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import flightClusterReducer from 'avantrip-react/global/FlightCluster/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  flightCluster:flightClusterReducer,
})

const store = createStore(reducer);
// ...
```
