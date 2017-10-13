import { map } from 'lodash';

const getFlight = cluster => {
  let flight = {};

  flight.airlineName = cluster.stages[0].options[0].validatingCarrier;
  flight.label = `Nombre de aerolínea ${flight.airlineName}`; 
  flight.logo = `https://cdn.avantrip.com/vuelos-desktop/bundles/avantripflight/images/ui/airlines/${flight.airlineName}.png?adq-20171009-0`;
  flight.price = cluster.price.totalPrice;
  flight.stopType = cluster.stages[0].options[0].scales;

  return flight;
}

export const populateComparisonFlights = (state={}) => {

  const comparisonFlights = map(state.comparisonFlights, fc => (getFlight(fc)))

  return {
    ...state,
    comparisonFlights
  };
}