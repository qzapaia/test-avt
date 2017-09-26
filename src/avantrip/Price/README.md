## Description
Componente para el precio, se puede transformar el currency por el simbolo correspondiente con **getSymbolFromCurrency**

## Basic use

```javascript
import Price from 'avantrip-react/avantrip/Price';

export default () => (
  <Price
    currency: 'USD',
    price:{10000},
  />
)
```


## Props

#### `currency={<Enum>}`
Tipo de moneda. Default: "ARS"

#### `currencySymbol={<Boolean>}`
Transforma el formato de precio al simbolo correspondiente. Default: False.

#### `price={<Number>}`
Monto

#### `locateStringFormat={<Number>}`
Formato de precio. Default: "es-AR"



Ver: [toLocaleString](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number/toLocaleString)

### Soporta todas las props de Text. Ver [Text](/?selectedKind=avantrip%2Fstyled%40Text)
