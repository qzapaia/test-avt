## Description
Es un componente que contiene dos nodos. Siempre mostrará el
nodo summaryInformation y solo mostrará el nodo extendedInformation
cuando la prop expanded sea TRUE.

## Basic use

```javascript
import ExpansionPanel from 'avantrip-react/avantrip/ExpansionPanel';

export default () => (
  <ExpansionPanel
    expanded={boolean}
    onChange={function}
    summaryInformation={node}
    extendedInformation={node}/>
)
```


## Props
#### `extendedInformation={<Node>}`
Este nodo se visualizará cuando la prop extended sea true.

#### `summaryInformation={<Node>}`
Este nodo se visualizará en todo momento y el hacer click
sobre el mismo ejecutará la función recibida en la prop
onChange.

#### `onChange={<Function>}`
Al hacer click sobre el componente summaryInformation se
ejecuta la funcion recibida en onChange. La misma recibirá
como parametro el estado contrario al recibido en la prop
expanded.

#### `expanded={<Boolean>}`
En TRUE muestra el nodo extendedInformation, caso contrario,
lo oculta.
