### Description
Componente para el teléfono y la ayuda del header de la home

### Basic use

```javascript
import PurchaseAccess from 'avantrip-react/avantrip/PurchaseAccess';

export default () => (
  <PurchaseAccess
    errorMessage={string}
    onSubmit={function}
    onChange={function}
    value={object}
  />
)
```

### Props

#### `onSubmit={<Function>}`
Envío del form

#### `onChange={<Function>}`
Guarda los cambios del form

#### `errorMessage={<String>}`
Mensaje de error génerico para un submit fallido

#### `value={<Object>}`
Valor del componente tiene la forma de:
```javascript
{
  purchaseId: String,
  purchaseEmail: String
}
```

