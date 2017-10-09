## Description
Componente para usos sarlanga.

## Basic use

```javascript
import SearchResults from 'avantrip-react/global/SearchResults';

export default () => (
  <SearchResults
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
import { sendData } from 'avantrip-react/global/SearchResults/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import searchResultsReducer from 'avantrip-react/global/SearchResults/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  searchResults:searchResultsReducer,
})

const store = createStore(reducer);
// ...
```
