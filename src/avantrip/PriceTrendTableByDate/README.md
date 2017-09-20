## Description
Componente para la tabla de Fechas Flexibles

## Basic use

```javascript
import PriceTrendTableByDate from 'avantrip-react/avantrip/PriceTrendTableByDate';

export default () => (
  <PriceTrendTableByDate
    flightDates={collection}
    selectedArrivalDate={date}
    selectedDepartureDate={date}
    onClick={function}
  />
)
```

## Props

#### `flightDates={<Collection>>}`
Collection que debe respetar:
```javascript
	[
		{
			vuelta:<Date>
			ida:<Date>
			price:<Number>
		}
	]
```

#### `selectedArrivalDate={<Date>}`
Date para indicar la fecha de regreso de vuelo

#### `selectedDepartureDate={<Date>}`
Date para indicar la fecha de partida de vuelo

#### `onClick={<Function>}`
Devuelve el vuelo seleccionado

## Redux

#### Actions
```javascript
import { sendData } from 'avantrip-react/avantrip/PriceTrendTableByDate/actions';
import store from 'somewhere';

store.dispatch(sendData({ email:"email@email.com" });
// ...
```

#### Reducer
```javascript
import priceTrendTableByDateReducer from 'avantrip-react/avantrip/PriceTrendTableByDate/reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  priceTrendTableByDate:priceTrendTableByDateReducer,
  todos
})

const store = createStore(reducer);
// ...
```
