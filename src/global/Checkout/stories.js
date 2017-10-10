import React from 'react';
import Checkout from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import CheckoutWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from "./reducer";

const response = {
  flights:[
    {
      type:1
    },
    {
      type:2
    }
  ]
}
const json = "{\"passenger\":[{\"ref\":0,\"type\":\"Adult\"}],\"session\":{\"id\":\"28276\",\"trackingCode\":\"af1ae221-8824-4c87-9f6f-008ad3d08594\",\"channel\":\"mobile\"},\"paymentMethods\":[],\"exchanges\":[{\"code\":\"DOLLAR\",\"rate\":16.65}],\"products\":[{\"destination\":[{\"iata\":\"SCL\",\"locations\":[{\"type\":\"Airport\",\"description\":\"Arturo Merino Ben\u00EDtez\",\"code\":\"SCL\"},{\"type\":\"City\",\"description\":\"Santiago\",\"code\":\"SCL\"},{\"type\":\"Country\",\"description\":\"Chile\"},{\"type\":\"Continent\",\"description\":\"Am\u00E9rica del Sur\"}]},{\"iata\":\"MIA\",\"locations\":[{\"type\":\"Airport\",\"description\":\"Intl. de Miami\",\"code\":\"MIA\"},{\"type\":\"City\",\"description\":\"Miami\",\"code\":\"MIA\"},{\"type\":\"Country\",\"description\":\"Estados Unidos\"},{\"type\":\"Continent\",\"description\":\"Am\u00E9rica del Norte\"}]},{\"iata\":\"EZE\",\"locations\":[{\"type\":\"Airport\",\"description\":\"Ministro Pistarini\",\"code\":\"EZE\"},{\"type\":\"City\",\"description\":\"Buenos Aires\",\"code\":\"BUE\"},{\"type\":\"Country\",\"description\":\"Argentina\"},{\"type\":\"Continent\",\"description\":\"Am\u00E9rica del Sur\"}]},{\"iata\":\"AEP\",\"locations\":[{\"type\":\"Airport\",\"description\":\"Jorge Newbery\",\"code\":\"AEP\"},{\"type\":\"City\",\"description\":\"Buenos Aires\",\"code\":\"BUE\"},{\"type\":\"Country\",\"description\":\"Argentina\"},{\"type\":\"Continent\",\"description\":\"Am\u00E9rica del Sur\"}]}],\"clusters\":[{\"id\":1,\"validatingCarrier\":\"LA\",\"codeshare\":true,\"prices\":{\"passengerPrice\":[{\"net\":11638,\"tax\":3117.1,\"sel\":14755.1,\"type\":\"Adult\",\"providerCode\":\"ADT\"}],\"itineraryPrice\":{\"net\":11638,\"tax\":3117.1,\"afip\":0,\"charge\":0,\"sel\":14755.1}},\"groupLegs\":[{\"legs\":[0]},{\"legs\":[1]}]}],\"flights\":[{\"refNumber\":0,\"number\":\"442\",\"marketing\":\"LA\",\"operating\":\"LA\",\"segments\":[{\"bookingClass\":\"S\",\"departure\":\"EZE\",\"arrival\":\"SCL\",\"departureDate\":\"2017-10-16 20:00\",\"arrivalDate\":\"2017-10-16 22:25\"}]},{\"refNumber\":1,\"number\":\"500\",\"marketing\":\"LA\",\"operating\":\"LA\",\"segments\":[{\"bookingClass\":\"O\",\"departure\":\"SCL\",\"arrival\":\"MIA\",\"departureDate\":\"2017-10-16 23:35\",\"arrivalDate\":\"2017-10-17 07:15\"}]},{\"refNumber\":2,\"number\":\"501\",\"marketing\":\"LA\",\"operating\":\"LA\",\"segments\":[{\"bookingClass\":\"O\",\"departure\":\"MIA\",\"arrival\":\"SCL\",\"departureDate\":\"2017-10-23 22:10\",\"arrivalDate\":\"2017-10-24 07:30\"}]},{\"refNumber\":3,\"number\":\"455\",\"marketing\":\"LA\",\"operating\":\"LA\",\"segments\":[{\"bookingClass\":\"S\",\"departure\":\"SCL\",\"arrival\":\"AEP\",\"departureDate\":\"2017-10-24 09:20\",\"arrivalDate\":\"2017-10-24 11:30\"}]}],\"legs\":[{\"refNumber\":0,\"tripProductId\":\"65805a2a-fe54-4069-8cc8-125cee7fbd80\",\"duration\":735,\"flightsRef\":[0,1]},{\"refNumber\":1,\"tripProductId\":\"37636f35-6335-4845-8f5e-618e043f83f0\",\"duration\":740,\"flightsRef\":[2,3]}],\"externalSearchId\":\"7622994d-a914-48d6-8bb8-d471dc2d2e8d\",\"type\":\"flight\"}]}";

storiesOf('global/Checkout', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer:{
      Checkout: reducer,
    },
  }))
  .add('Default', () => (
    
    <Checkout values={response}/>
    
  ))
  .add('With data', () => (
    <CheckoutWithData params={json}></CheckoutWithData>
  ))
