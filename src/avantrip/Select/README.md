## Description
Select con posibilidad de utilizar un input text como buscador y/o resetear el value

## Basic use

```javascript
import Select from 'avantrip-react/avantrip/Select';

export default () => (
  <Select
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    options={options}
    searchable={false}
    clearable={false}
    noResultsText:'No se encontraron resultados'
  />
)
```


## Props

#### `name={<String>}`
Nombre que recibe para el name del input hidden

#### `placeholder={<String>}`
Nombre que recibe para el placeholder del select

#### `onChange={<Function>}`
Funcion onChange

#### `value={<String>}`
Value por default

#### `options={<Array>}`
Array con opciones para el select

#### `searchable={<Boolean>}`
La posibilidad de que en el focus del select puedas buscar las opciones como un input text. Por default false.

#### `clearable={<Boolean>}`
La posibilidad de resetear el value del select. Por default false.
