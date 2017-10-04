## Description
Componente para usos sarlanga.

## Basic use

```javascript
import FlightsFilters from 'avantrip-react/global/FlightsFilters';

export default () => (
  <FlightsFilters
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
import { sendData } from 'avantrip-react/global/FlightsFilters/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import flightsFiltersReducer from 'avantrip-react/global/FlightsFilters/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  flightsFilters:flightsFiltersReducer,
})

const store = createStore(reducer);
// ...
```
