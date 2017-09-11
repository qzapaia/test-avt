### Description
Grafica un chart según unos datos.

### Basic use

```javascript
import Chart from 'avantrip-react/avantrip/Chart';

export default () => (
  <Chart
    data={collection}
    value={string}
    key={string}
    setting={object}
  />
)
```


### Props

#### `data={<Collection>}`
Información que se mostrará en el chart.

#### `Value={<String>}`
Nombre de la key en donde se encuentra el valor a graficar.

#### `key={<String>}`
Nombre de la key en donde se encuentra el label para cada
valor.

#### `setting={<Object>}`
Configuración que se pasará para cada componente del Chart.
Los valores posibles de configuración son:
```javascript
{
  width: 600,
  height: 150,
  barColor: '#8884d8'
}
```
