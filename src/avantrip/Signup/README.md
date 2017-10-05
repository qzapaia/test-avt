## Description
Componente ubicado en el Header. Se encarga del registro de un usuario.

## Basic use

```javascript
import Signup from 'avantrip-react/avantrip/Signup';

export default () => (
  <Signup
    onFacebookSignup={function}
  />
)
```

## Props

#### `onFacebookSignup={<Function>}`
Handler para el botón de login con Facebook. Devuelve un objeto con la forma:
```javascript
{
  facebook: {
    email: {string},
    id: {string},
    name: {string},
    accessToken: {string}
  }
}
```


## Redux

#### Actions
```javascript
export const FACEBOOK_SIGNUP_SET_USER = 'FACEBOOK_SIGNUP_SET_USER';

export const setUser = state => ({
  type:FACEBOOK_SIGNUP_SET_USER,
  payload:state
})

// ...
```

#### Reducer
```javascript
import { FACEBOOK_SIGNUP_SET_USER } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  const {type,payload} = action;

  switch(type){
    case FACEBOOK_SIGNUP_SET_USER:
      return {
        ...state,
        ...payload
      }
      break;
    default:
      return state;
  }
}
// ...
```
