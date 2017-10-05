## Description
Componente para usos sarlanga.

## Basic use

```javascript
import UserNav from 'avantrip-react/global/UserNav';

export default () => (
  <UserNav
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
import { sendData } from 'avantrip-react/global/UserNav/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import userNavReducer from 'avantrip-react/global/UserNav/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  userNav:userNavReducer,
})

const store = createStore(reducer);
// ...
```
