## Description
Suscripción a newsletter. Son dos tipos de suscripciones, una con solo un email y otra con un email y un destino. Son utilizados en la home y en el resultado de búsqueda respectivamente.

## Basic use

```javascript
import TripSubscribe from 'avantrip-react/global/Subscribe';

export default () => (
  <Subscribe
    onChange={function}
    onSubscribe={function}
    email={string}
    title={string}
    subscriptionStatus={string}
    value={object}
  />
)
```

## Props

#### `onSubscribe={<Function>}`
Escucha el envío de la suscripcion. Recibe un objeto con los valores para ejecutar la suscripcion

#### `onChange={<Function>}`
Recibe el valor en cada cambio en el input de email.

#### `email={<String>}`
Email que se envía la info.

#### `subscriptionStatus={success|error}`
Informa del estado de la transacción

#### `value={<String>}`
Objecto que debe tener la forma:
```
{
  city: {string},
}
```

#### `title={<String>}`
Título de la caja. Si se le agrega al texto el string [city], el mismo será reemplazado por la ciudad de la  propiedad value.


## Redux

#### Actions
```javascript
import { subscribe, setEmail } from 'avantrip-react/global/Subscribe/actions';
import store from 'somewhere';

//type: es el tipo de suscripcion(Home || Search)
store.dispatch(subscribe(type, { email:"email@email.com", city: "Miami" });
store.dispatch(setEmail(email);
// ...
```

#### Reducer
```javascript
import subscribeReducer from 'avantrip-react/global/Subscribe/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  subscribe:suscribeReducer,
})

const store = createStore(reducer);
// ...
```
