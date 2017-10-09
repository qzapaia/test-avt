## Description
Este componente crea un cuadro de la sabana de destinos en QV

## Basic use

```javascript
import DestinationsListByPoints from 'avantrip-react/quiero/DestinationsListByPoints';

export default () => (
  <DestinationsListByPoints
    region= 'Argentina'
    destinations= { destinations }
  />
)
```

## Props

#### `region={<String>}`
Titulo del cuadro (Argentina, Europa, EEUU, etc.)

#### `destionations={<Array>}`
Coleccion de objetos de destinos. Lo obtenemos del backend
