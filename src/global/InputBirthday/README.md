## Description
Permite la carga de una fecha de cumpleaños.

## Basic use

```javascript
import InputBirthday from 'avantrip-react/avantrip/InputBirthday';

export default () => (
  <InputBirthday
    label={Node}
    onChange={Function}
    value={Object}
    min={Number}
    max={Number}
  />
)
```

## Props

#### `onChange={<Boolean>}`
Se ejecuta al seleccionar una opción cualquiera.
Según que parte de la fecha se seleccione devuelve:
```javascript
//Para el día
{
  [day]: {string}
}
//Para el mes
{
  [month]: {string}
}
//Para el año
{
  [year]: {string}
}
```

#### `label={<Node>}`
label utilizado para todo el componente

#### `value={<Object>}`
Define el valor de cada parte de la fecha. Debe tener la

#### `min:{Number}`
Fecha que se utiliza como mínimo para mostrar los datos de
cada parte de la fecha.
Debe ser una fecha en formato EPOCH/UNIX.

#### `max:{Number}`
Fecha que se utiliza como máximo para mostrar los datos de
cada parte de la fecha.
Debe ser una fecha en formato EPOCH/UNIX.