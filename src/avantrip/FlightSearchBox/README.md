## Description
Component of the flight search box

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
Event handler that receive as a parameter the key and value from the selected item.

#### `onClick={<Function>}`
Event trigger when the button is clicked and send the values of the search

#### `values={<Collection>}`
Values selected. They must respect the format: 
```javascript
  [{
    leg:'1',
    amountTraveller:{adults:'1', babies: '1', children: '1'},
    class:'1',
    flexibleDate: true, 
    originCity: "bue", 
    destinationCity: "mia"
  }]
```