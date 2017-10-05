## Description
Componente que se utiliza para setear en el estado los datos del usuario y para desloguearlo.

## Redux

#### Actions
```javascript

export const FACEBOOK_SIGNUP_SET_USER = 'FACEBOOK_SIGNUP_SET_USER';
export const USER_LOG_OUT = 'USER_LOG_OUT';

export const setFacebookUser = state => ({
  type:FACEBOOK_SIGNUP_SET_USER,
  payload:state
})


export const logout = () => ({
  type:USER_LOG_OUT,
  payload:{}
})
// ...
```

#### Reducer
```javascript
import { FACEBOOK_SIGNUP_SET_USER, USER_LOG_OUT } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  const {type,payload} = action;

  switch(type){
    case FACEBOOK_SIGNUP_SET_USER:
    case USER_LOG_OUT:
      return {
        ...state,
        ...payload
      }
      break;
    default:
      return state;
  }
}
```
