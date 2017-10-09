### Description
Dibuja el gráfico de tendencia de precio.

### Basic use

```javascript
import PriceTrendCalendar from 'avantrip-react/avantrip/PriceTrendCalendar';

export default () => (
  <PriceTrendCalendar
    data={collection}
    disclaimer={string}
    selectedMonth={number},
    onDaySelected={function},
    onMonthSelected={function},
    departureDate={date(Only formats allowed per moment) }
    returnDate={date(Only formats allowed per moment)}
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
Nota: date debe ser de formato DATE compatible con momentJS.

#### `disclaimer={<String>}`
Mensaje informativo para el gráfico.

#### `onDaySelected={<Function>}`
Evento que se ejecuta al hacer click sobre alguna barra del
gráfico. Devuelve un objeto con la forma:
```javascript
  {
    date:"2017-09-29",
    label:"29 Fr",
    month:8,
    price:21830.5,
    travelDays:8
  }
```

#### `onMonthSelected={<Function>}`
Evento que se ejecuta al hacer click uno de los elementos
que forman el slider de meses. Devuelve el valor numérico del
mes seleccionado: Ej: Enero = 0, Febrero = 1

#### `departureDate={<date>}`
Fecha de partida.

#### `returnDate={<date>}`
Fecha de retorno.

#### `selectedMonth={<date>}`
Valor númerico del mes que se desea previsualizar. En caso de
no especificarse, se usará el mes actual.

### Basic use with data

```javascript
import PriceTrendCalendarWithData from 'avantrip-react/avantrip/PriceTrendCalendarWithData';

export default () => (
  <PriceTrendCalendarWithData
    origin="BUE"
    destination="MIA"
    dateFrom=2017-09-01
    adults="1"
    children="0"
    babies="0"
    minDepartureMonthYear="2017-09"
    maxDepartureMonthYear="2018-09"
    minDepartureDate="2017-09-17"
    maxDepartureDate="2018-09-17"
    disclaimer={`Tarifa por adulto para una estadía de 8 días. Los precios visualizados son los mejores encontrados por los usuarios en los últimos días y podrían no estar actualizados`}
  />
)
```

## Redux

#### Actions
```javascript
import { sendData } from 'avantrip-react/avantrip/PriceTrendCalendar/actions';

store.dispatch(getData({
  origin: {string},
  destination: {string},
  dateTo: {date[YYYY-MM-DD]},
  dateFrom: {date[YYYY-MM-DD]},
  dataLayer: true,
  adults: {number},
  children: {number},
  babies: {number},
  duration: "30",
  minDepartureMonthYear: {date[YYYY-MM]},
  maxDepartureMonthYear: {date[YYYY-MM]},
  minDepartureDate: {date[YYYY-MM-DD]},
  maxDepartureDate: {date[YYYY-MM-DD]}
}));
// ...
```

#### Reducer
```javascript
import {
  SET_SELECTED_MONTH,
  SET_SELECTED_DAY
} from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload, selectedMonth, selectedDay } = action;

  switch (type) {
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
