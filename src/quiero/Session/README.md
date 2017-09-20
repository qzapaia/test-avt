## Description
Componente encargado de mostrar la información del usuario loggeado en QV!

## Basic use

```javascript
import Session from 'avantrip-react/quiero/Session';

export default () => (
  <Session
    messageNumber={string}
    userName={string}
    points={string}
    quoteLink={string}
  />
)
```


## Props

#### `messageNumber={<String>}`
Cantidad de mensajes por leer en la sección de cotizaciones

#### `userName={<String>}`
Nombre de usuario en QV

#### `points={<Number>}`
Puntos disponibles en la cuenta de QV del usuario

#### `quoteLink={<Number>}`
Link a la seccion de cotizaciones
