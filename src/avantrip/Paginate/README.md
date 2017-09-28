## Description
Componente para el paginado del resultado de búsqueda

## Basic use

```javascript
import Paginate from 'avantrip-react/avantrip/Paginate';

export default () => (
  <Paginate
    pageCount={number}
    currentPage={number}
    onPageSelected={function}
  />
)
```

## Props

#### `pageCount={<Number>}`
Cantidad de páginas

#### `currentPage={<Number>}`
Página seleccionada

#### `onPageSelected={<Function>}`
Handler de la acción de selección de página