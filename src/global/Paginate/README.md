## Description
Componente para el paginado del resultado de búsqueda

## Basic use

```javascript
import Paginate from 'avantrip-react/avantrip/Paginate';

export default () => (
  <Paginate
    pageCount={number}
    currentPage={number}
    onPageSelected={function}
  />
)
```

## Props

#### `pageCount={<Number>}`
Cantidad de páginas

#### `currentPage={<Number>}`
Página seleccionada

#### `onPageSelected={<Function>}`
Handler de la acción de selección de página


## Redux

#### Actions
```javascript
import { setPagesCount, setSelectedPage } from 'avantrip-react/global/Paginate/actions';
import store from 'somewhere';

store.dispatch(setPagesCount(2));
store.dispatch(setSelectedPage(1));
// ...
```
#### Reducer
```javascript
import {
  SET_PAGES_COUNT,
  SET_SELECTED_PAGE
} from "./actions";

const initialState = 0;

export default (state = initialState, action) => {
  const { type, pagesCount, selectedPage } = action;

  switch (type) {
    case SET_PAGES_COUNT:
       return {
        ...state,
        pagesCount
      };
      break;
    case SET_SELECTED_PAGE:
      return {
        ...state,
        selectedPage
      };
      break;
    default:
      return state;
  }
}
// ...
```