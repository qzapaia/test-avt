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

#### `title={<Node>}`
Nodo mostrado como título.

#### `currency={<String>}`
String del tipo de moneda.

#### `detailInfo={<Object>}`
Objeto que brinda toda la información para que se dibuje el
detalle. debe tener la forma:

```javascript

//Información para mostrar FareDetail para Checkout
{
  'referencePrice': 12802,
  'items': [{
    'label': '2 Adultos',
    'price': 25604
  },{
    'label': '2 Niños',
    'price': 24048
  },{
    'label': '2 Bebés',
    'price': 622
  }],
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

//Información para mostrar FareDetail para Resultado de Búsqueda

{
  'referencePrice': 12802,
  'items': [{
    'label': '2 Adultos',
    'price': 25604
  },{
    'label': '2 Niños',
    'price': 24048
  },{
    'label': '2 Bebés',
    'price': 622
  }],
  'taxes': 14633,
  'charges': 0,
  'priceWithoutInterest': 64.907,
  'finalPrice': 69.177
}
```
