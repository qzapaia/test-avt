import React from 'react';
import FlightCluster from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from '../../global/FlightCluster/README.md';

const mockCluster = {"additionalInfo":"¡Hasta 12 cuotas sin interés con Visa y Master del Banco Francés!","disclaimerText":"¿Qué incluye el precio?","routes":[{"options":[{"summaryInfo":{"id":24,"airlines":[{"code":"AR","name":"Aerolineas Argentinas"}],"departureIata":"AEP","departureDate":1520795700000,"arrivalIata":"COR","arrivalDate":1520851500000,"scalesText":"1 escala","totalTime":1530,"isSelected":false},"extendedInfo":{"flights":[{"common":{"flightStep":1,"flightNumber":"1790","airlines":[{"code":"AR","name":"Aerolineas Argentinas"}],"class":"Económica"},"departure":{"iata":"AEP","date":1520795700000,"city":"Buenos Aires","airport":"Jorge Newbery"},"arrival":{"iata":"RES","date":1520801100000,"city":"Resistencia","airport":"Aerop. Resistencia"}},{"common":{"flightStep":2,"flightNumber":"2560","airlines":[{"code":"AR","name":"Aerolineas Argentinas"}],"class":"Económica","provider":[{"code":"AU","name":"Austral Lineas Aerea"}]},"departure":{"iata":"RES","date":1520846400000,"city":"Resistencia","airport":"Aerop. Resistencia"},"arrival":{"iata":"COR","date":1520851500000,"city":"Villa Carlos Paz (Cordoba) - Argentina","airport":"Aerop. Pajas Blancas"}}],"header":"Buenos Aires hacia\n    Villa Carlos Paz (Cordoba) - Argentina"}},{"summaryInfo":{"id":23,"airlines":[{"code":"AR","name":"Aerolineas Argentinas"}],"departureIata":"AEP","departureDate":1520801400000,"arrivalIata":"COR","arrivalDate":1520851500000,"scalesText":"1 escala","totalTime":1355,"isSelected":false},"extendedInfo":{"flights":[{"common":{"flightStep":1,"flightNumber":"1792","airlines":[{"code":"AR","name":"Aerolineas Argentinas"}],"class":"Económica"},"departure":{"iata":"AEP","date":1520801400000,"city":"Buenos Aires","airport":"Jorge Newbery"},"arrival":{"iata":"RES","date":1520806800000,"city":"Resistencia","airport":"Aerop. Resistencia"}},{"common":{"flightStep":2,"flightNumber":"2560","airlines":[{"code":"AR","name":"Aerolineas Argentinas"}],"class":"Económica","provider":[{"code":"AU","name":"Austral Lineas Aerea"}]},"departure":{"iata":"RES","date":1520846400000,"city":"Resistencia","airport":"Aerop. Resistencia"},"arrival":{"iata":"COR","date":1520851500000,"city":"Villa Carlos Paz (Cordoba) - Argentina","airport":"Aerop. Pajas Blancas"}}],"header":"Buenos Aires hacia\n    Villa Carlos Paz (Cordoba) - Argentina"}}],"header":{"title":"Ida","departureCity":"Buenos Aires","arrivalCity":"Villa Carlos Paz (Cordoba) - Argentina","date":"2017-10-17T21:20:01.852Z"}}],"fareDetail":{"referencePrice":"3700.96","items":[{"label":"2 Adultos","price":25604},{"label":"2 Niños","price":24048},{"label":"2 Bebés","price":622}],"taxes":14633,"charges":0,"finalPrice":69.177}};


const enhace = withState('selectedCluster','onCheckout', {});

const FlightClusterWithState = enhace((props) => {
  const { selectedCluster} = props;

  const checkoutHandler = (cluster) => {
    action('ON CHECKOUT')(JSON.stringify(cluster));
  }

  return (
    <FlightCluster {...props}
      onCheckout={checkoutHandler}
      data={mockCluster}
    />
  )
})

storiesOf('avantrip/FlightCluster', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
  }))
  .add('Default', () => (
    <FlightClusterWithState />
  ))
