## Description
Component of the flight search box

## Basic use

```javascript
import FlightSearchBox from 'avantrip-react/avantrip/FlightSearchBox';

export default () => (
  <FlightSearchBox
    title={String}
    onChange={Function}
    onSearch={Function}
    onSetSearchBoxFlight={Function}
    searchValues={Collection}
  />
)
```


## Props

#### `title={String}`
title of the Component

#### `onChange={<Function>}`
Event handler that receive as a parameter the key and value from the selected item.

#### `onSearch={<Function>}`
Event trigger when the button is clicked and send the values of the search

#### `onSetSearchBoxFlight={<Function>}`
Event handler that receive as a parameter to add o remove flight.

#### `searchValues={<Object>}`
Values selected. They must respect the format: 
```javascript
  [destinations:[],  
  value: {
    leg:'1',
    adults:1,
    children:0,
    infants:0,
    class:'1',
    flexibleDates: false,
    flights: [
      {
        originCity: '',
        destinationCity: '',
        dates: undefined
      }
    ]
  },
  errors: {
    amountOfTravellers: '',
    flights: []
  }]
```