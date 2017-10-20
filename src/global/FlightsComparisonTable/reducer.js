import { map, get } from 'lodash';

const getFlight = ( references, cluster ) => ({
  airline: {
    "name": get(references, `carriers[${get(cluster, "stages[0].options[0].validatingCarrier")}]`, ""),
    "code": get(cluster, "stages[0].options[0].validatingCarrier", "")
  },
  price: get(cluster, "price.totalPrice", ""),
  stopType: get(cluster, "stages[0].options[0].scales", "")
});

export const populateComparisonFlights = (state={}) => (
  map(state.comparisonFlights, fc => getFlight(state.references, fc))
);
