## Description
Componente cluster para el resultado de búsqueda

## Basic use

```javascript
import FlightCluster from 'avantrip-react/global/FlightCluster';

export default () => (
  <FlightCluster
    onClick={function}
    data={object}
  />
)
```

## Props

#### `onClick={<Function>}`
Event handler

#### `data={<Object>}`
Información que debe venir estructurada:

```javascript

{
  additionalInfo : '¡Hasta 12 cuotas sin interés con Visa y Master del Banco Francés!'
  cluster.disclaimerText : '¿Qué incluye el precio?'
  cluster.fareDetail : {    
    'referencePrice': 12802,
      'items': [{
        'label': '2 Adultos',
        'price': 25604
      },{
        'label': '2 Niños',
        'price': 24048
      },{
        'label': '2 Bebés',
        'price': 622
      }],
    'taxes': 14633,
    'charges': 0,
    'finalPrice': 69.177
  cluster.routes = [
    {
      'header': {
        title:'IDA',
        departureCity: 'Buenos Aires',
        arrivalCity: 'Nueva York',
        date:new Date()
      },
      'options':[
        {
          'summaryInfo': {
            'id':123456,
            'airlineLogos':[
              'https://cdn.avantrip.com/vuelos-desktop/bundles/avantripflight/images/ui/airlines/CM.png?adq-20170927-0',
              'https://cdn.avantrip.com/vuelos-desktop/bundles/avantripflight/images/ui/airlines/Z8.png?adq-20170927-0'
            ],
            'provider':'Operado por Air St Thomas',
            'departureIata':'EZE',
            'departureDate': new Date(),
            'arrivalIata':'MIA',
            'arrivalDate': new Date(),
            'scalesText': '1 Escala',
            'totalTime': new Date()
          },
          'extendedInfo': {
            'header':'Buenos Aires hacia Miami',
            'flights':[
              {
                departure:{
                  iata:'ATL',
                  date:new Date(),
                  city:'Atlanta',
                  airport:'Aerop. Intl. Hartsfield Jackson'
                },
                arrival:{
                  iata:'MIA',
                  date:new Date(),
                  city:'Miami',
                  airport:'Intl. de Miami'
                },
                common:{
                  flightStep:2,
                  flightNumber:'DA120',
                  airlineLogo: 'https://cdn.avantrip.com/vuelos-desktop/bundles/avantripflight/images/ui/airlines/CM.png?adq-20170927-0',
                  provider:'Delta Air Lines',
                  class:'Económica',
                }
              }
            ]
          }
        }
      ]
    }
  ];
}



```