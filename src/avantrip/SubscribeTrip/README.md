## Description
Suscripcion a cosas generales del site.

## Basic use

```javascript
import SubscribeTrip from 'avantrip-react/avantrip/SubscribeTrip';

export default () => (
  <SubscribeTrip
    onSubscribe={function}
    title={string}
    state={string}
  />
)
```

## Props

#### `onSubscribe={<Function>}`
Escucha el envío de la suscripcion. Recibe un objeto con los valores para ejecutar la suscripcion

#### `state={success|error}`
Informa del estado de la transacción

#### `city={<String>}`
Ciudad de la que se quiere recibir alertas.


## Redux

#### Actions
```javascript
import { subscribe } from 'avantrip-react/avantrip/SubscribeTrip/actions';
import store from 'somewhere';

store.dispatch(subscribe({ email:"email@email.com", city: "Miami" });
// ...
```

#### Reducer
```javascript
import subscribeReducer from 'avantrip-react/avantrip/SubscribeTrip/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  subscribe:suscribeReducer,
  todos
})

const store = createStore(reducer);
// ...
```
