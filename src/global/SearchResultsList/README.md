## Description
Componente para usos sarlanga.

## Basic use

```javascript
import SearchResultsList from 'avantrip-react/global/SearchResultsList';

export default () => (
  <SearchResultsList
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
import { sendData } from 'avantrip-react/global/SearchResultsList/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import searchResultsListReducer from 'avantrip-react/global/SearchResultsList/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  searchResultsList:searchResultsListReducer,
})

const store = createStore(reducer);
// ...
```
