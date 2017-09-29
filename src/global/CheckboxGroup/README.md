### Description
Agrupa una colección de opciones relacionadas y las muestra
como input checkbox.

### Basic use

```javascript
import CheckboxGroup from 'avantrip-react/avantrip/CheckboxGroup';

export default () => (
  <CheckboxGroup
    label={Node}
    onChange={Function}
    options={Collection}
    values={Array}
  />
)
```

### Props

#### `onChange={<Function>}`
Función que se ejecuta cada vez que se cambia el estado de
un checkbox. Envía como parámetro un objeto con la forma:

```
[{
  [value]: {string},
  [checked]: {boolean}
}]
```
**NOTA: value** se utilizá como identificdor de la opción,
por lo cual DEBE ser único.

#### `label={<Node>}`
Especifica un label para el componente.

#### `options={<Collection>}`
Colección de elementos que deben respetar la forma:
```
[{
  value: 1,
  label: "Todos los horarios"
}]
```

#### `values={<Array>}`
Array que contiene los valores seleccionados.
