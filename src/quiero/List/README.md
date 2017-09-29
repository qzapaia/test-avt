### Description
Enlista los children de la forma especificada en la prop type.
Cada child DEBE tener las props key e id definidas.

### Basic use

```javascript
import List from 'avantrip-react/quiero/List';

export default () => (
  <List
    type={enum}
  />
)
```

### Props

#### `type={<Enum> : list | grid}`
Dependiendo su valor organiza los chidren de forma:
 - list: formato lista
 - grid: formato grilla
