import withReadme from 'storybook-readme/with-readme'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import React from 'react'
import FlightClusterRoute from './'

import { withState, compose } from 'recompose';



import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);


// el enhace concatena hocs de recompose,
// en este caso le inyecta un estado falso
// ver más en https://github.com/acdlite/recompose
const enhace = withState('counter','increment',0);


const FlightClusterRouteWithState =  enhace((props) => {
  // enchufar tu component con el estado simulado
  const { title, date, departureCity, arrivalCity} = props;

  return (
    <FlightClusterRoute {...props} title={title} date={date} departureCity={departureCity} arrivalCity={arrivalCity}>
      <div>Componente Child FlightRouteOption1</div>
      <div>Componente Child FlightRouteOption2</div>
      <div>Componente Child FlightRouteOption3</div>
    </FlightClusterRoute>
  )
})

storiesOf('avantrip/FlightClusterRoute', module)
  .add('Default', addReadme(() => (
    <FlightClusterRouteWithState 
      title="IDA" 
      date="Mié. 01 Nov. de 2017" 
      departureCity="Buenos Aires" 
      arrivalCity="Nueva York">
    </FlightClusterRouteWithState>
  )))



