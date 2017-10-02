## Description
Componente para usos sarlanga.

## Basic use

```javascript
import Home from 'avantrip-react/avantrip/Home';

export default () => (
  <Home
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
import { sendData } from 'avantrip-react/avantrip/Home/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import homeReducer from 'avantrip-react/avantrip/Home/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  home:homeReducer,
})

const store = createStore(reducer);
// ...
```
