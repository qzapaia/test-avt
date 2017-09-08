### Description
Grafica un chart según unos datos. Se utilizó el componente
externo http://recharts.org/#/en-US/guide

### Basic use

```javascript
import Chart from 'avantrip-react/avantrip/Chart';

export default () => (
  <Chart
    data={collection}
    keyValue={string}
    keyName={string}
    setting={object}
  />
)
```


### Props

#### `data={<Collection>}`
Información que se mostrará en el chart.

#### `keyValue={<String>}`
Nombre de la key en donde se encuentra el valor a graficar.

#### `keyName={<String>}`
Nombre de la key en donde se encuentra el label para cada
valor.

#### `setting={<Object>}`
Configuración que se pasará para cada componente del Chart.
Se debe respetar la guia de Chart http://recharts.org/#/en-US/guide
