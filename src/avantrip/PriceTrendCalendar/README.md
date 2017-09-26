### Description
Dibuja el gráfico de tendencia de precio.

### Basic use

```javascript
import PriceTrendCalendar from 'avantrip-react/avantrip/PriceTrendCalendar';

export default () => (
  <PriceTrendCalendar
  data={collection}
  disclaimer={string}
  onClick={function}
  />
)
```

### Props

#### `data={<Collection>}`
Coleccion con información para el gráfico.
Debe tener los siguientes atributos:
```javascript
  {
    price: 14520,
    date: "2017-10-06"
  }
```

#### `disclaimer={<String>}`
Mensaje informativo para el gráfico.

#### `onClick={<Function>}`
Evento que se ejecuta al hacer click sobre alguna barra del
gráfico.

## Redux

#### Actions
```javascript
import { sendData } from 'avantrip-react/avantrip/PriceTrendCalendar/actions';

store.dispatch(getData({
  origin: {string},
  destination: {string},
  dateTo: {date[YYYY-MM-DD]},
  dateFrom: {date[YY-MM-DD]},
  dataLayer: true,
  adults: {number},
  children: {number},
  babies: {number},
  duration: "30",
  minDepartureMonthYear: {date[YY-MM]},
  maxDepartureMonthYear: {date[YY-MM]},
  minDepartureDate: {date[YY-MM-DD]},
  maxDepartureDate: {date[YY-MM-DD]}
}));
// ...
```

#### Reducer
```javascript
import {
  SET_HISTOGRAM_DATA,
  SET_SELECTED_MONTH,
  SET_SELECTED_DAY
} from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload, selectedMonth, selectedDay } = action;

  switch (type) {
    case SET_HISTOGRAM_DATA:
      return {
        ...state,
        payload
      };
      break;
    case SET_SELECTED_MONTH:
      return {
        ...state,
        selectedMonth
      };
      break;
    case SET_SELECTED_DAY:
      return {
        ...state,
        selectedDay
      };
      break;
    default:
      return state;
  }
}
// ...
```
