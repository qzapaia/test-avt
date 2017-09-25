## Description
Componente para usos sarlanga.

## Basic use

```javascript
import FlightSearchBox from 'avantrip-react/avantrip/FlightSearchBox';

export default () => (
  <FlightSearchBox
    title={String}
    onChange={Function}
    onClick={Function}
    values={Collection}
  />
)
```


## Props

#### `title={String}`
title of the Component

#### `onChange={<Function>}`
Event handler that receive as a parameter the key to the selected key.

#### `onClick={<Function>}`
Event handler

#### `isActive={<Boolean>}`
Enable an action within the component

