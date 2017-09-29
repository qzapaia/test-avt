import React from 'react';
import FlightsComparisonTable from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const AA_AIRLINE_LOGO = 'https://cdn.avantrip.com/vuelos-desktop/bundles/avantripflight/images/ui/airlines/AA.png?adq-20170911-0';
const AA_AIRLINE_LABEL = 'American Airlines';
const AA_AIRLINE_NAME = 'AA';

const UA_AIRLINE_LOGO = 'https://cdn.avantrip.com/vuelos-desktop/bundles/avantripflight/images/ui/airlines/UA.png?adq-20170911-0';
const UA_AIRLINE_LABEL = 'United Airlines';
const UA_AIRLINE_NAME = 'UA';

const LA_AIRLINE_LOGO = 'https://cdn.avantrip.com/vuelos-desktop/bundles/avantripflight/images/ui/airlines/LA.png?adq-20170911-0';
const LA_AIRLINE_LABEL = 'LATAM Airlines';
const LA_AIRLINE_NAME = 'LA';

const airlinesBase = [];
airlinesBase.push({logo:AA_AIRLINE_LOGO, label:AA_AIRLINE_LABEL, name: AA_AIRLINE_NAME});
airlinesBase.push({logo:UA_AIRLINE_LOGO, label:UA_AIRLINE_LABEL, name: UA_AIRLINE_NAME});
airlinesBase.push({logo:LA_AIRLINE_LOGO, label:LA_AIRLINE_LABEL, name: LA_AIRLINE_NAME});

const generateRandomFlights = (airlinesBase, randomFlightsQty) => { 
  let randomFlights = [];

  for(var i=0; i<randomFlightsQty; i++){
    let randomAirlineIndex = Math.floor(Math.random() * airlinesBase.length);
    randomFlights.push({
      'airlineName': airlinesBase[randomAirlineIndex].name,
      'label': airlinesBase[randomAirlineIndex].label,
      'logo': airlinesBase[randomAirlineIndex].logo,
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

storiesOf('global/FlightsComparisonTable', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <FlightsComparisonTableWithState></FlightsComparisonTableWithState>
  ))

