## Description
Componente para usos sarlanga.

## Basic use

```javascript
import User from 'avantrip-react/global/User';

export default () => (
  <User
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
import { sendData } from 'avantrip-react/global/User/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import userReducer from 'avantrip-react/global/User/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  user:userReducer,
})

const store = createStore(reducer);
// ...
```
