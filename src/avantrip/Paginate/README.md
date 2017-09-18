## Description
Componente para el paginado del resultado de búsqueda

## Basic use

```javascript
import Paginate from 'avantrip-react/avantrip/Paginate';

export default () => (
  <Paginate
    pages={collection}
    currentPage={object}
    onClick={function}
  />
)
```


## Props

#### `pages={<Collection>}`
Recibe una collection de objetos. Cada objeto debe poseer una propiedad integer "value"

#### `currentPage={<Object>}`
Objeto con una propiedad integer llamada "value". 

#### `onClick={<Function>}`
Handler de la acción de cambio de ṕágina

## Redux

#### Actions
```javascript
import { sendData } from 'avantrip-react/avantrip/Paginate/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import paginateReducer from 'avantrip-react/avantrip/Paginate/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  paginate:paginateReducer,
  todos
})

const store = createStore(reducer);
// ...
```
