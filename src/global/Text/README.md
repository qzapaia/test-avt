### Description
Componente de textos.

### Basic use

```javascript
import Text from 'avantrip-react/avantrip/Text';

export default () => (
  <Text
    type={string}
    color={string}
    tag={string}
  />
)
```


### Props
#### `type={hxxl|xxl|xl|l|m|s|xs}`
Tipo de texto a utilizar. Los valores de cada tipo están establecidos

#### `color={<String>}`
Identificador de color. Ver styled@Colors para más info.

#### `tag={<String>}`
Tag a utilizar para crear el Text. Por defecto es `span`