## Description
Muestra el logo de una aerolinea según su código.

## Basic use

```javascript
import AirlineLogo from 'avantrip-react/global/AirlineLogo';

export default () => (
  <AirlineLogo
    code={"AA"}
    height={"20px"}
    width={"24px"}
  />
)
```

## Props

#### `code={<String>}`
Código de una aerolinea.

#### `height={<String>}`
Alto del logo.

#### `width={<String>}`
Ancho del logo.
