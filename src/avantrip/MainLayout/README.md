## Description
MainLayout de avantrip.

## Basic use

```javascript
import MainLayout from 'avantrip-react/avantrip/MainLayout';

export default () => (
  <MainLayout />
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
import { sendData } from 'avantrip-react/avantrip/MainLayout/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import MainLayoutReducer from 'avantrip-react/avantrip/MainLayout/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  MainLayout:MainLayoutReducer,
})

const store = createStore(reducer);
// ...
```
-->
