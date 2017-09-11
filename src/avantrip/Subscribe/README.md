## Description
Suscripcion a cosas generales del site.

## Basic use

```javascript
import Subscribe from 'avantrip-react/avantrip/Subscribe';

export default () => (
  <Subscribe
    onSubscribe={function}
    title={string}
    state={string}
  />
)
```

## Props

#### `onSubscribe={<Function>}`
Escucha el envío de la suscripcion. Recibe un objeto con los valores para ejecutar la suscripcion

#### `title={<String>}`
Titulo de la caja

#### `state={success|error}`
Informa del estado de la transacción


#### `isActive={<Boolean>}`
Enable an action within the component


## Redux

#### Actions
```javascript
import { subscribe } from 'avantrip-react/avantrip/Subscribe/actions';
import store from 'somewhere';

store.dispatch(subscribe({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import subscribeReducer from 'avantrip-react/avantrip/Subscribe/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  subscribe:suscribeReducer,
  todos
})

const store = createStore(reducer);
// ...
```
