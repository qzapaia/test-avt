## Description
Componente para usos sarlanga.

## Basic use

```javascript
import Test from 'avantrip-react/avantrip/Test';

export default () => (
  <Test
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
import { sendData } from 'avantrip-react/avantrip/Test/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import testReducer from 'avantrip-react/avantrip/Test/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  test:testReducer,
})

const store = createStore(reducer);
// ...
```
