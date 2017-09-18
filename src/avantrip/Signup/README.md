## Description
Componente ubicado en el Header. Se encarga del registro con Facebook

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
Handler para el botón de login con Facebook

## Redux

#### Actions
```javascript
import { facebookSignup } from 'avantrip-react/avantrip/Signup/actions';
import store from 'somewhere';

store.dispatch(facebookSignup({}));
// ...
```

#### Reducer
```javascript
import signupReducer from 'avantrip-react/avantrip/Signup/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  signup:signupReducer
})

const store = createStore(reducer);
// ...
```
