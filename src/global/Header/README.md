## Description
Header de Avantrip que instancia todos los componentes
necesarios.

## Basic use

```javascript
import Header from 'avantrip-react/avantrip/Header';

export default () => (
  <Header
    currentPathname="/vuelos/"
    phoneText="0810-222-2826"/>
)
```

## Props

#### `phoneText={<String>}`
Es el número de teléfono de compra.


#### `currentPathname={<String>}`
Pathname actual.
