## Description
Componente para la tabla de Fechas Flexibles

## Basic use

```javascript
import PriceTrendTableByDate from 'avantrip-react/avantrip/PriceTrendTableByDate';

export default () => (
  <PriceTrendTableByDate
    pricesByDates={collection}
    selectedReturningDate={date(formato permitido por moment)}
    selectedDepartureDate={date(formato permitido por moment)}
    onClick={function}
    departureDateTitle={node}
    returnDateTitle={node}
  />
)
```

## Props

#### `pricesByDates={<Collection>>}`
Collection que debe respetar:
```javascript
	[
		{
			returningDate:<Date>
			departureDate:<Date>
			price:<Number>
		}
	]
```

#### `selectedReturningDate={<Date>}`
Date para indicar la fecha de regreso de vuelo.
Debe respetar algún formato permitido por moment.

#### `selectedDepartureDate={<Date>}`
Date para indicar la fecha de partida de vuelo
Debe respetar algún formato permitido por moment.

#### `onClick={<Function>}`
Devuelve el vuelo seleccionado

#### `departureDateTitle={<node>}`
Título de cada fila

#### `returnDateTitle={<node>}`
Título de cada columna

## Basic use with data

```javascript
import PriceTrendTableByDateWithData from 'avantrip-react/avantrip/PriceTrendTableByDateWithData';

export default () => (
  <PriceTrendTableByDateWithData
    origin="BUE"
    destination="MIA"
    departureDate="2018-01-01"
    returningDate="2018-01-08"
    channel: "Desktop",
    portal: "avantrip",
    cabinClass="Economy"
    passengersAdults=1
    passengersChildren=0
    passengersInfants=0
  />
)
```
Los valores por defecto de `channel` y `portal` son 
`Desktop` y `portal` respectivamente.
