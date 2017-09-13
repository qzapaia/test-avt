## Description
Componente para el resultado de búsqueda. Recibe una collection de vuelos y muestra una tabla con los mejores precios agrupado por escala y aerolínea

## Basic use

```javascript
import FlightsComparisonTable from 'avantrip-react/avantrip/FlightsComparisonTable';

export default () => (
  <FlightsComparisonTable
    flights={collection}
  />
)
```


## Props

#### `flights={<Collection>}`
Collection de vuelos. Espera el siguiente formato
{
  'name': 'AA',
  'label': 'Aerolíneas Argentinas',
  'logo': 'src de imagen',
  'price': '31233',
  'scaleType': '0'
}
