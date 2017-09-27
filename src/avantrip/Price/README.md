## Description
Componente para el precio, se puede transformar el currency por el simbolo correspondiente con **getSymbolFromCurrency**

## Basic use

```javascript
import Price from 'avantrip-react/avantrip/Price';
import {getSymbolFromCurrency} from 'currency-map-symbol';

export default () => (
  <Price
    currency: 'ARS',
    currencySymbol:'false';
    price:{10000},
    locateStringFormat:'es-AR',
    type:'s',
    color:'brand'
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

#### `type={<String>}`
El tipo de texts a utilizar importado de styled.theme. Por default 's'

#### `color={<String>}`
El color a utilizar en el precio (numero) importado de styled.theme. Por default 'brand'





Ver: [toLocaleString](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number/toLocaleString)

### Soporta todas las props de Text. Ver [Text](/?selectedKind=avantrip%2Fstyled%40Text)
