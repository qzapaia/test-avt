## Description
Componente para mostrar el detalle de los items en el checkout.

## Basic use

```javascript
import CheckoutItemsDetail from 'avantrip-react/avantrip/CheckoutItemsDetail';

export default () => (
  <CheckoutItemsDetail
    stages={Collection}
  />
)
```


## Props

#### `stages={Collection}`
Collection of stages. They must respect the format:
```
[{
  leg: 'IDA',
  duration: '19 hs 10 m',
  stops: '1 escala',
  flights: [
    {
      marketingCarrier: {
        name: "LATAM Airlines",
        logo: 'https://cdn.avantrip.com/static/images/airlines-icons/LA.png'
      },
      number: 456,
      class: 'Economica',
      departure: {
        airportCode: 'AEP',
        location: 'Buenos Aires',
        date: 'Sáb 18 Nov De 2017',
        hour: '12:45 hs'
      },
      arrival: {
        airportCode: 'SCL',
        location: 'Santiago',
        date: 'Sáb 18 Nov De 2017',
        hour: '15:45 hs'
      },
      stopTime: '8hs 10m'
    }
  ]
}]
```

