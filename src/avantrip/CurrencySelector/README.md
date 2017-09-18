## Description
Componente para listar monedas

## Basic use

```javascript
import CurrencySelector from 'avantrip-react/avantrip/CurrencySelector';

export default () => (
  <CurrencySelector
    options={Collection} 
    onClick={Function} 
    value={int} 
  />
)
```


## Props

#### `onClick={ <Function>}`
Event handler that receive as a parameter the value to the selected key.

#### `options={<Collection>}`
Collection to related options. They must respect the format: ´´´ [{ value: 1, label: "ARS" }] ´´´

#### `value={<Int>}`
Value selected.