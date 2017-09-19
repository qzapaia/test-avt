## Description
Permite mostrar el detalle de una compra.

## Basic use

```javascript
import CheckoutFareDetail from 'avantrip-react/avantrip/CheckoutFareDetail';

export default () => (
  <CheckoutFareDetail
    lastPlaces={string},
    currency={string},
    detailInfo={object}
  />
)
```


## Props

#### `lastPlaces={<String>}`
Cantidad de últimos lugares. En caso de no especificarse,
no sé muestra el título informativo.

#### `currency={<String>}`
String del tipo de moneda.

#### `detailInfo={<Object>}`
Objeto que brinda toda la información para que se dibuje el
detalle. debe tener la forma:

```javascript
{
  'adult': {
    'price': {12802},
    'quantity': 2,
  },
  'children': {
    'price': 12024,
    'quantity': 2,
  },
  'babies': {
    'price': 311,
    'quantity': 2,
  },
  'taxes': 14633,
  'charges': 0,
  'priceWithoutInterest': 64.907,
  'interest': {
    'TEA': 5.24,
    'CFT': 6.46,
    'value': 4271
  },
  'finalPrice': 69.177
}
```
