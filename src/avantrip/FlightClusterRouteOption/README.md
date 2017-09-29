## Description
Muestra una de las opciones de una ruta dentro de un cluster.

## Basic use

```javascript
import FlightClusterRouteOption from 'avantrip-react/avantrip/FlightClusterRouteOption';

export default () => (
  <FlightClusterRouteOption
    onChange={function}
    data={object}
    isExpanded={boolean}
  />
)
```


## Props

#### `onChange={<Function>}`
Inform when option is checked

#### `data={<Object>}`
Route data object

```javascript
{
  "airline": "JJ",
  "airlineName": "LATAM Airlines",
  "operatorAirline": "LH",
  "operatorAirlineName": "Lufthansa",
  "duration": 1140,

  "flights": [
    {
      "airline": "JJ",
      "airlineName": "LATAM Airlines",
      "seatingType":"Económica",
      "flightNumber":"8080",

      "departureAirport": "AEP",
      "departureAirportName": "Jorge Newbery",
      "departureCity": "Buenos Aires",
      "departureDate": 1505939480986,

      "arrivalAirport": "GRU",
      "arrivalAirportName": "Aerop. Guarulhos",
      "arrivalCity": "San Pablo",
      "arrivalDate": 1505939480986,

      "connectionTime":90
    }
  ]
}
```
