## Description - Readme Global
Componente para usos sarlanga.

## Basic use

```javascript
import Test from 'avantrip-react/global/Test';

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
import { sendData } from 'avantrip-react/global/Test/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import testReducer from 'avantrip-react/global/Test/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  test:testReducer,
})

const store = createStore(reducer);
// ...
```
