### Description
Input de tipo radio con un label.

### Basic use

```javascript
import InputRadio from 'avantrip-react/avantrip/InputRadio';

export default () => (
  <InputRadio
    id={string}
    value={string}
    name={string}
    checked={boolean}
    label={node}
    onChange={function}
  />
)
```

### Props

#### `onChange={<Function>}`
Evento que se ejecuta al cambiar el estado del componente y
pasa como parametro el value del mismo.

#### `value={<String>}`
Valor del input.

#### `name={<String>}`
Nombre del input.

#### `id={<String | Number>}`
Identificador unívico del input.

#### `checked={<Boolean>}`
Según el valor ingresado checkea o no el input.

#### `label={<Node>}`
Nodo utilizado como label para el input. NO utilizar componente
label en el arbol de este nodo.
