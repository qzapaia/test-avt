## Description
Componente para la página de checkout. Conjunto de inputs para el envío de la factura (no llega a ser form)

## Basic use

```javascript
import CheckoutBillingInfo from 'avantrip-react/avantrip/CheckoutBillingInfo';

export default () => (
  <CheckoutBillingInfo     
    errorMessage={string}
    onChange={function}
    value={object}
  />
)
```
### Props

#### `onChange={<Function>}`
Guarda los cambios del form

#### `errorMessage={<String>}`
Mensaje de error génerico para un submit fallido

#### `value={<Object>}`
Valor del componente tiene la forma de:

```javascript
{
  name: String,
  email: String,
  lastName: String,
  phoneType: String,
  phoneNumber: String,
  postalCode: String
}
```