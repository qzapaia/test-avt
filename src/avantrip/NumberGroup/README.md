## Description
Componente de grupo de input numbers.

## Basic use

```javascript
import NumberGroup from 'avantrip-react/avantrip/NumberGroup';

export default () => (
  <NumberGroup
    options={collection}
    onChange={function}
    label={string}
  />
)
```


## Props

#### `options={<Collection>}`
Colección de optiones para crear los input numbers. Son los mismos que InputNumber.
Ejemplo:
```javascript
[{
  label:'numero a',
  id:'a',
  value:1
},{
  label:'numero b',
  id:'b',
  value:2
}]
```

#### `onChange={<Function>}`
Recibe la opción que cambió con el nuevo valor
```javascript
{
  id:'a',
  value:1
}
```

#### `onChangeKeyvalue={<Function>}`
Recibe la opción que cambió con el nuevo valor. El formato es {key:value}
```javascript
{
  a:1
}
```

#### `label={<String>}`
Label del grupo.
