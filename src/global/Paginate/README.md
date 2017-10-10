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


### Basic use with data

```javascript
import PaginateWithData from 'avantrip-react/global/PaginateWithData';

export default () => (
 <PaginateWithData
    origin="BUE"
    destination="MIA"
    departureDate="15-03-2018"
    returningDate="26-03-2018"
    passengersAdults="1"
    passengersChildren="0"
    passengersInfants="0"
    cabinClass="Economy"
    channel="Desktop"
    portal="AVANTRIP"
    showItemsByPage="10"
    />
)
```

## Props
#### `origin={<String>}`
IATA ciudad de Origen

#### `destination={<String>}`
IATA ciudad de Destino

#### `departureDate={<String>}`
Fecha de salida

#### `returningDate={<String>}`
Fecha de regreso

#### `passengersAdults={<Integer>}`
Cantidad de pasajeros adultos

#### `passengersChildren={<Integer>}`
Cantidad de pasajeros menores

#### `passengersInfants={<Integer>}`
Cantidad de pasajeros infantes

#### `cabinClass={<String>}`
Tipo de vuelo Economy|Bussines

#### `channel={<String>}`
tipo de canal desde donde se esta accediendo DESKTOP,MOBILE,ETC

#### `portal={<String>}`
ej.AVANTRIP

### `showItemsByPage=(<Integer>)`
cantidad de items que se mostrara por pagina,


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