### Description
Muestra los children pasados como tabs. Devuelve la key
del tab seleccionado.

### Basic use

```javascript
import Tabs from 'avantrip-react/avantrip/Tabs';

export default () => (
  <Tabs onChange={setTab} selectedTab={selectedtab}>
      <Tab id="1" title="title1">content 1</Tab>
      <Tab id="2" title="title2">content 2</Tab>
      <Tab id="3" title="title3">content 3</Tab>
      <span id="3" title="title3">content 3</span>
  </Tabs>
)
```

### Props

#### `onChange={<Function>}`
Recibe el valor de la key del tab clickeado.

#### `selectedTab={<Number>}`
Tabs agrega a cada children una key que corresponde al indice
de que le coresponde al array de children. Esta prop contiene
el valor de la key del tab clickeado.
