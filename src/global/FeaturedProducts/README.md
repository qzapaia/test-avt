## Description
Componente que lista productos como ProductCards.
Se puede setear el modo lista o grilla.

## Basic use

```javascript
import FeaturedProducts from 'avantrip-react/global/FeaturedProducts';

export default () => (
  <FeaturedProducts
    products={collection}
    listMode={boolean}
  />
)
```

## Props

#### `products={<Collection>}`
Colleccion de productos a mostrar. Debe tener la forma:
``` javascript
{
  "media": "https://static.avantrip.com/fkt-flight/images/img-cluster-miami.jpg",
  "imageTitle": "Volando con American Airlines",
  "title": "Miami",
  "subtitle": "Ida y vuelta",
  "supportingInfo": "Precio desde",
  "price": "14755",
  "href": "https://www.avantrip.com/oportunidades/vuelos-miami"
}
```
#### `listMode={<Boolean>}`
Setea modo lista. Por defecto es falso.


## Redux

#### Actions
```javascript
export const FEATURED_PRODUCTS_SET_PRODUCTS = "FEATURED_PRODUCTS_SET_PRODUCTS";

export const getProducts = type => async dispatch => {

export const setProducts = (data, type) => {
// ...
```

#### Reducer
```javascript
import {
  FEATURED_PRODUCTS_SET_PRODUCTS
} from './actions';

const initialState = {
  products:[]
};

export default (state = initialState, action) => {

  switch(type){
    case FEATURED_PRODUCTS_SET_PRODUCTS:
      return {
        ...state,
        products:payload
      }
  }
}

// ...
```
