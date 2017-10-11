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
const filter = {
  airtlines: [{
      labels:"Aerolineas Argentinas",
      value:29
      }],
  airports: {
    cities:["",""],
    items:[{
      "0":{
        "0": [{
          labels:"Aerolineas Argentinas",
          value:29
        }]
        "1":,
      },
      "1":
    }],
  } ,
  filghtType: "roundtrip",
  scales:[
    0:{
      options:[
        {
          labels:"Aerolineas Argentinas",
          value:29
        }
      ]
    }
  ],
  schedules:[
    0:{
      options:[
        {
          labels:"Aerolineas Argentinas",
          value:29
        }
      ]
    }
  ],
}

#### `values={<Collections>}`
coleccion de los valores seleccionas para aplicar los filtros

#### `onChange={<Function>}`
Inform when option is checked

#### `onClear={<Function>}`
Inform when option "all" is checked

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
