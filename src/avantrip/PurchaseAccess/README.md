### Description
Componente para el teléfono y la ayuda del header de la home

### Basic use

```javascript
import PurchaseAccess from 'avantrip-react/avantrip/PurchaseAccess';

export default () => (
  <PurchaseAccess
  	errorMessage={string}
  	onSubmit={function}
  />
)
```

### Props

#### `onSubmit={<Function>}`
Envío del form

#### `errorMessage={<String>}`
Mensaje de error génerico para un submit fallido
