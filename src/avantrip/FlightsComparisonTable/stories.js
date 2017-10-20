import React from 'react';
import FlightsComparisonTable from './withData';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const AA_AIRLINE_LABEL = 'American Airlines';
const AA_AIRLINE_NAME = 'AA';

const UA_AIRLINE_LABEL = 'United Airlines';
const UA_AIRLINE_NAME = 'UA';

const LA_AIRLINE_LABEL = 'LATAM Airlines';
const LA_AIRLINE_NAME = 'LA';

const airlinesBase = [];
airlinesBase.push({name:AA_AIRLINE_LABEL, code: AA_AIRLINE_NAME});
airlinesBase.push({name:UA_AIRLINE_LABEL, code: UA_AIRLINE_NAME});
airlinesBase.push({name:LA_AIRLINE_LABEL, code: LA_AIRLINE_NAME});

const generateRandomFlights = (airlinesBase, randomFlightsQty) => {
  let randomFlights = [];

  for(var i=0; i<randomFlightsQty; i++){
    let randomAirlineIndex = Math.floor(Math.random() * airlinesBase.length);
    randomFlights.push({
      'airline': {
        'name': airlinesBase[randomAirlineIndex].name,
        'code': airlinesBase[randomAirlineIndex].code
      },
      'price': Math.floor(Math.random() * 100000),
      'stopType': Math.floor(Math.random() * 3 )
    });
  }

  return randomFlights;
}

const enhace = withState('flights','updateFlights', generateRandomFlights(airlinesBase, 50));

const FlightsComparisonTableWithState =  enhace((props) => {
  const { flights, updateFlights } = props;

  const onChange = () => {

  }

  return (
    <FlightsComparisonTable flights={flights} />
  )
})

storiesOf('avantrip/FlightsComparisonTable', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <FlightsComparisonTableWithState></FlightsComparisonTableWithState>
  ))
