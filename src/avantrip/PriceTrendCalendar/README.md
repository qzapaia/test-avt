### Description
Dibuja el gráfico de tendencia de precio.

### Basic use

```javascript
import PriceTrendCalendar from 'avantrip-react/avantrip/PriceTrendCalendar';

export default () => (
  <PriceTrendCalendar
  data={colelction}
  disclaimer={string}
  onClick={function}
  />
)
```

### Props

#### `data={<Collection>}`
Coleccion con información para el gráfico.
Debe tener los siguientes atributos:
```javascript
  {
    price: 14520,
    name: "Ju 3"
  }
```

#### `disclaimer={<String>}`
Mensaje informativo para el gráfico.

#### `onClick={<Function>}`
Evento que se ejecuta al hacer click sobre alguna barra del
gráfico.
