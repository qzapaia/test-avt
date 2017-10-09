## Description
Este componente crea un cuadro de la sabana de destinos en QV

## Basic use

```javascript
import DestinationsListByPoints from 'avantrip-react/quiero/DestinationsListByPoints';

export default () => (
  <DestinationsListByPoints
    region = 'Argentina'
    destinations = { destinations }
  />
)
```

## Props

#### `region={<String>}`
Titulo del cuadro (Argentina, Europa, EEUU, etc.)

#### `destinations={<Array>}`
Coleccion de objetos de destinos. Lo obtenemos del backend.

Ej.

```javascript

const destinations = [
  {destinoNombre: "Bahia Blanca", rango: 4000, rangoBusiness: 10000},
  {destinoNombre: "Bariloche", rango: 4000, rangoBusiness: 15000},
  {destinoNombre: "Calafate", rango: 4000, rangoBusiness: 25000},
  {destinoNombre: "Mendoza", rango: 4000, rangoBusiness: 15000},
  {destinoNombre: "Formosa", rango: 4000, rangoBusiness: 15000},
  {destinoNombre: "Jujuy", rango: 4000 }
];
```
