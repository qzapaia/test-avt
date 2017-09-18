## Description
Card de descripción para productos.

## Basic use

```javascript
import ProductCard from 'avantrip-react/avantrip/ProductCard';

export default () => (
  <ProductCard
    href={string}
    target={string}
    listMode={boolean}
    media={string}
    price={string}
    supportingInfo={string}
    subtitle={string}
    title={string}
  />
)
```


## Props

#### `title={<String>}`
Titulo

#### `subtitle={<String>}`
Subtitulo

#### `supportingInfo={<String>}`
Texto de soporte

#### `media={<String>}`
URL de la imagen de soporte

#### `price={<String>}`
Precio del producto

#### `href={<String>}`
Link de la card

#### `target={<String>}`
Target del link

#### `listMode={<String>}`
Le informa a la card que se muestre en modo lista si corresponde
