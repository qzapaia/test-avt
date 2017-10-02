## Description
HomePage de avantrip.

## Basic use

```javascript
import HomePage from 'avantrip-react/avantrip/HomePage';

export default () => (
  <HomePage />
)
```

<!--

## Props

#### `onEvent={<Boolean> || <Function>}`
Event handler

#### `isActive={<Boolean>}`
Enable an action within the component


## Redux

#### Actions
```javascript
import { sendData } from 'avantrip-react/avantrip/HomePage/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import homePageReducer from 'avantrip-react/avantrip/HomePage/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  homePage:homePageReducer,
})

const store = createStore(reducer);
// ...
```
-->
