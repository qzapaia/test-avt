## Description
Suscripcion a cosas generales del site.

## Basic use

```javascript
import Subscribe from 'avantrip-react/avantrip/Subscribe';

export default () => (
  <Subscribe
    onSubscribe={function}
    onChange={function}
    title={string}
    state={string}
    email={string}
  />
)
```

## Props

#### `onSubscribe={<Function>}`
Subscribe

#### `onChange={<Function>}`
Handler de cambios en el input email

#### `title={<String>}`
Título de la caja

#### `state={success|error}`
Informa del estado de la transacción

#### `email={<String>}`
Valor del input email

## Redux

#### Actions
```javascript
export const SUBSCRIPTION_INIT = 'SUBSCRIPTION_INIT';
export const SUBSCRIPTION_COMPLETE = 'SUBSCRIPTION_COMPLETE';
export const SET_EMAIL = 'SET_EMAIL';

// Alto Hardcoding Papas
export const subscribe = data => {
  return subscriptionResult({state: true});
}

export const subscriptionResult = state => ({
  type:SUBSCRIPTION_COMPLETE,
  payload:state
})

export const setEmail = email => ({
  type:SET_EMAIL,
  email
})

```

#### Reducer
```javascript
import { SUBSCRIPTION_COMPLETE, SET_EMAIL } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  const {type, payload, email} = action;

  switch(type){
    case SUBSCRIPTION_COMPLETE:
      if(payload.state){
        return {
          ...state,
          subscriptionStatus: 'success'
        }
      } else {
        return {
          ...state,
          subscriptionStatus: 'error'
        }
      }
      break;
    case SET_EMAIL:
      return {
        ...state,
        email
      };
      break;
    default:
      return state;
  }
}

```
