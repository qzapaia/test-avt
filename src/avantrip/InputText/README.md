## Description
Input de texto con label e icono opcional.

## Basic use

```javascript
import InputText from 'avantrip-react/avantrip/InputText';

export default () => (
  <InputText
    onChange:{function},
    value:{string},
    label:{string},
    requiresExistingValue:{boolean},
    placeholder:{string},
    icon:{string},
  >
    <option value="a">Sugerencia de valor a</option>
    <option value="b">Sugerencia de valor b</option>
  </InputText?
)
```


## Props

#### `onChange={<Function>}`
Listener de cambio de valor

#### `value={<String>}`
Valor del input

#### `label={<String>}`
Label del input

#### `placeholder={<String>}`
Placeholder del input

#### `requiresExistingValue={<Boolean>}`
Condición que exige que el valor sea uno de la lista de options.

#### `icon={<String>}`
Identificador de ícono. Ver [Icon](/?selectedKind=avantrip%2Fstyled%40Icon)
