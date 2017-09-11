## Description
Es un componente de entrada que te permite obtener un valor
booleano según su estado de selección.

## Basic use

```javascript
import InputCheckbox from 'avantrip-react/avantrip/InputCheckbox';

export default () => (
  <InputCheckbox
    id={string}
    onChange={function}
    name={string}
    label={node}
    checked={boolean}
    disabled={boolean}
  />
)
```


## Props

#### `id={<String>}`
Identificador univoco de input.

#### `name={<String>}`
Nombre del input.

#### `label={<Node>}`
Nodo utilizado como label para el input. NO utilizar componente
label en el arbol de este nodo.

#### `onChange={<Function>}`
Evento que envía el estado del checkbox(TRUE || FALSE)

#### `checked={<Boolean>}`
Estado del checkbox. Por defecto es FALSE.

#### `disabled={<Boolean>}`
Indica si el input debe estar deshabilitado. Por defecto es
FALSE.
