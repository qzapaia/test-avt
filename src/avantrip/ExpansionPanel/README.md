## Description
Muestra **summaryInformation** y solo muestra **extendedInformation**
cuando **isExpanded** sea true.

## Basic use

```javascript
import ExpansionPanel from 'avantrip-react/avantrip/ExpansionPanel';

export default () => (
  <ExpansionPanel
   isExpanded={boolean}
   onChange={function}
   SummaryInformation={({onChange}) => <Button onClick={onChange} />}
   ExtendedInformation={({onChange}) => <Button onClick={onChange} />}/>
)
```

## Props

#### `SummaryInformation={<Function>}`
Componente que contiene información reducida y al momento de
crear el nodo se le pasa **onChange**.

#### `ExtendedInformation={<Function>}`
Componente que contiene información extendida. Si **isExpanded**
es true se visualizará, de lo contrario, no.
Al momento de crear el nodo se le pasa **onChange**.

#### `onChange={<Function>}`
Al hacer click sobre el componente summaryInformation se
ejecuta la funcion recibida en onChange. La misma recibirá
como parametro el estado contrario al recibido en la prop
isExpanded.

#### `isExpanded={<Boolean>}`
En true muestra el nodo extendedInformation, de lo contrario,
lo oculta.
