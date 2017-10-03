## Description
Componente para usos sarlanga.

## Basic use

```javascript
import FeaturedProducts from 'avantrip-react/global/FeaturedProducts';

export default () => (
  <FeaturedProducts
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
import { sendData } from 'avantrip-react/global/FeaturedProducts/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import featuredProductsReducer from 'avantrip-react/global/FeaturedProducts/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  featuredProducts:featuredProductsReducer,
})

const store = createStore(reducer);
// ...
```
