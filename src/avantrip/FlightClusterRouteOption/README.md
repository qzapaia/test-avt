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
  "airline": String,
  "operatorAirline": String,
  "duration": Number,

  "flights": [
    {
      "airline": String,
      "class":String,
      "flightNumber":String,

      "departureAirport": String,
      "departureAirportCode": String,
      "departureCity": String,
      "departureDate": Date,

      "arrivalAirport": String,
      "arrivalAirportCode": String,
      "arrivalCity": String,
      "arrivalDate": Date,

      "duration":Number
    }
  ]
},
```
