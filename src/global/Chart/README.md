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
    settings={object}
    renderBar={Function}
  />
)
```


### Props

#### `data={<Collection>}`
Información que se mostrará en el chart.

#### `renderBar={<Function>}`
Recibe las propiedades de cada barra y permite alterarlas.

#### `CustomTooltip={<Component>}`
Componente que se usará como tooltip de cada barra.

#### `Value={<String>}`
Nombre de la key en donde se encuentra el valor a graficar.

#### `key={<String>}`
Nombre de la key en donde se encuentra el label para cada
valor.

#### `settings={<Object>}`
Configuración que se pasará para cada componente del Chart.
Los valores posibles de configuración son:
```javascript
{
  width: 600,
  height: 150,
  barColor: '#8884d8'
}
```

#### `onClick={<function>}`
Se ejecuta cada vez que se hace click sobre una barra, enviando
un objeto con la información de cada vuelo.