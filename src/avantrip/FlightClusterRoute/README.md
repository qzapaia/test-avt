### Description
Componente que agrupa las opciones de ruta en cada cluster de una resultado de búsqueda del vertical vuelos.
Recibe como children las rutas.

### Basic use

```javascript
import FlightClusterRoute from 'avantrip-react/avantrip/FlightClusterRoute';

export default () => (
  <FlightClusterRoute
  title={string} 
  date={string} 
  departureCity={string} 
  arrivalCity={string}
  />
)
```


### Props

#### `title={<String>}`
Tipo de ruta (Ida, Vuelta, Tramo 1, etc)

#### `date={<String>}`
Fecha de la ruta

#### `departureCity={<String>}`
Ciudad de partida

#### `arrivalCity={<String>}`
Ciudad de llegada



