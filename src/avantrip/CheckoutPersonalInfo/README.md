## Description
Componente para la carga de datos personales.

## Basic use

```javascript
import CheckoutPersonalInfo from 'avantrip-react/avantrip/CheckoutPersonalInfo';

export default () => (
  <CheckoutPersonalInfo
    onChange={function}
    traveller={object}
    minBirthdate={number}
    maxBirthdate={number}
  />
)
```

## Props

#### `onChange={<Function>}`
Función lanzada cuando se realiza un cambio en algún
componente. Devuelve el valor de cada cambio.

#### `traveller={<Object>}`
```javascript
{
  "docType":"passport",
  "residencePlace":"BR",
  "birthday":{
    "year":"1985",
    "month":"9",
    "day":"17"
  },
  "docNumber":31824514,
  "lastname":"Garcia",
  "firstname":"Alejandro"
}
```

#### `minBirthdate:{Number}`
Fecha que se utiliza como mínimo para mostrar los datos de
cada parte de la fecha.
Debe ser una fecha en formato EPOCH/UNIX.

#### `maxBirthdate:{Number}`
Fecha que se utiliza como máximo para mostrar los datos de
cada parte de la fecha.
Debe ser una fecha en formato EPOCH/UNIX.
