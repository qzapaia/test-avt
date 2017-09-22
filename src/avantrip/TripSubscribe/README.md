## Description
Suscripcion con un destino específico.

## Basic use

```javascript
import TripSubscribe from 'avantrip-react/avantrip/TripSubscribe';

export default () => (
  <TripSubscribe
    onChange={function}
    onSubscribe={function}
    title={string}
    state={string}
    value={object}
  />
)
```

## Props

#### `onSubscribe={<Function>}`
Escucha el envío de la suscripcion. Recibe un objeto con los valores para ejecutar la suscripcion

#### `onChange={<Function>}`
Recibe el vamor en cada cambio en el inptu de email.

#### `state={success|error}`
Informa del estado de la transacción

#### `value={<String>}`
Objecto que debe tener la forma:

```
{
  email: {string},
  city: {string},
}
```

## Redux

#### Actions
```javascript
import { subscribe } from 'avantrip-react/avantrip/TripSubscribe/actions';
import store from 'somewhere';

store.dispatch(subscribe({ email:"email@email.com", city: "Miami" });
// ...
```

#### Reducer
```javascript
import subscribeReducer from 'avantrip-react/avantrip/TripSubscribe/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  tripSubscribe:suscribeReducer,
})

const store = createStore(reducer);
// ...
```
