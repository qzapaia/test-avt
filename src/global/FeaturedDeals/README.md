## Description
Componente para usos sarlanga.

## Basic use

```javascript
import FeaturedDeals from 'avantrip-react/global/FeaturedDeals';

export default () => (
  <FeaturedDeals
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
import { sendData } from 'avantrip-react/global/FeaturedDeals/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import featuredDealsReducer from 'avantrip-react/global/FeaturedDeals/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  featuredDeals:featuredDealsReducer,
})

const store = createStore(reducer);
// ...
```
