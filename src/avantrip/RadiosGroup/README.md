### Description
Agrupa una colección de opciones relacionadas.

### Basic use

```javascript
import RadiosGroup from 'avantrip-react/avantrip/RadiosGroup';

export default () => (
  <RadiosGroup
    label={Node}
    onChange={Function}
    options={Collection}
  />
)
```

### Props

#### `onChange={<Function>}`
Event handler that receive as a parameter the key to the
selected key.

#### `label={<Node>}`
Specifies a label for an option-group

#### `options={<Collection>}`
Collection to related options. They must respect the format:
´´´
[{
  key: 1,
  label: "Todos los horarios",
  checked: true
}]
´´´
