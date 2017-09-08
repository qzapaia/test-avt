### Description
Muestra los children pasados como tabs. Devuelve la key
del tab seleccionado.

### Basic use

```javascript
import Tabs from 'avantrip-react/avantrip/Tabs';

export default () => (
  <Tabs
  onChange={function}
  selectedTab={number}
  />
)
```

### Props

#### `onChange={<Function>}`
Recibe el valor de la key del tab clickeado.

#### `selectedTab={<Number>}`
Tabs agrega a cada children una key que corresponde al indice
de que le coresponde al array de children. Esta prop contiene
el valor de la key del tab clickeado.
