## Description
Componente para mostrar los filtros que pueden ser aplicados en el resultado de la busqueda de un vuelo.

## Basic use

```javascript
import FlightsFilters from 'avantrip-react/global/FlightsFilters';

export default () => (
  <FlightsFilters
    options=""
    values=""
    onChange=""
    onClear=""
    />
)
```
## Props

#### `options={<Collections>}`
coleccion de la options de los filtros de vuelos
{
  label:"options 1",
  value:: 1
}

#### `values={<Collections>}`
coleccion de los valores seleccionas para aplicar los filtros

#### `onChange={<Function>}`
Inform when option is checked

#### `onClear={<Function>}`
Inform when option "all" is checked


### Basic use with data

```javascript
import FlightsFiltersWithData from 'avantrip-react/avantrip/FlightsFiltersWithData';

export default () => (
 <FlightsFiltersWithData
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

## Redux

#### Actions
```javascript
import { setChange, setClear } from 'avantrip-react/global/FlightsFilters/actions';
import store from 'somewhere';

store.dispatch(setChange({ path:"airports" ,change:{value:'AEP',event:'function' } });
store.dispatch(setClear({ path:"airports" });
// ...
```
#### Reducer
```javascript
import {
  SET_CHANGE,
  SET_CLEAR
} from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload} = action;

  switch (type) {
    case SET_CHANGE:
      return {
        ...state,
        payload
      };
      break;
    case SET_CLEAR:
      return {
        ...state,
        selectedMonth
      };
      break;
    default:
      return state;
  }
}
// ...
```