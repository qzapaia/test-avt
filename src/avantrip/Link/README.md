## Description
Funciona como link de una paágina a otra.

## Basic use

```javascript
import Link from 'avantrip-react/avantrip/Link';

export default () => (
  <Link
    target={string}
    href={string}
    icon={node}
  />
)
```


## Props

#### `target={_blank || _ self || _parent || _top || framename}`
Especifica el tipo de target del link. Por defecto es self.

#### `href={<Boolean>}`
Dirección de url a donde apunta el link. Por defecto es #.

#### `icon={<Node>}`
Instancia de un icono
