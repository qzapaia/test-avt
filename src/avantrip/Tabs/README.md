### Description
Componente para usos sarlanga.

### Basic use

```javascript
import Tabs from 'avantrip-react/avantrip/Tabs';

export default () => (
  <Tabs
  onChange={function}
  selectedTab={number}
  />
)
```


### Props

#### `onChange={<Function>}`
Event handler

#### `selectedTab={<Number>}`
Tabs add to each children a number key. This prop contains
the number of the key that was selected
