import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApolloProvider } from 'react-apollo';

import FlightsList from './FlightsList'
import FlightsListWithData from './FlightsListWithData'
import client from './apollo-client'

storiesOf('vuelos/Hotels List', module)
  .add('Dumb', () => (
    <FlightsList items={[{name:'mock hotel item'}]} />
  ))
  .add('With data', () => (
    <ApolloProvider client={client}>
      <FlightsListWithData />
    </ApolloProvider>
  ));
