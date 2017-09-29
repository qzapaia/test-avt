import React from 'react';
import Checkout from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import CheckoutWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from "../../global/Checkout/reducer";

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
const json = "{\"passenger\":[{\"ref\":0,\"type\":\"Adult\"}],\"session\":{\"id\":\"28212\",\"trackingCode\":\"40bbf2ae-f171-4a1b-b2df-112eb00c5ac3\",\"channel\":\"mobile\"},\"paymentMethods\":[],\"exchanges\":[{\"code\":\"DOLLAR\",\"rate\":16.65}],\"products\":[{\"destination\":[{\"iata\":\"SCL\",\"locations\":[{\"type\":\"Airport\",\"description\":\"Arturo Merino Ben\u00EDtez\",\"code\":\"SCL\"},{\"type\":\"City\",\"description\":\"Santiago\",\"code\":\"SCL\"},{\"type\":\"Country\",\"description\":\"Chile\"},{\"type\":\"Continent\",\"description\":\"Am\u00E9rica del Sur\"}]},{\"iata\":\"MIA\",\"locations\":[{\"type\":\"Airport\",\"description\":\"Intl. de Miami\",\"code\":\"MIA\"},{\"type\":\"City\",\"description\":\"Miami\",\"code\":\"MIA\"},{\"type\":\"Country\",\"description\":\"Estados Unidos\"},{\"type\":\"Continent\",\"description\":\"Am\u00E9rica del Norte\"}]},{\"iata\":\"EZE\",\"locations\":[{\"type\":\"Airport\",\"description\":\"Ministro Pistarini\",\"code\":\"EZE\"},{\"type\":\"City\",\"description\":\"Buenos Aires\",\"code\":\"BUE\"},{\"type\":\"Country\",\"description\":\"Argentina\"},{\"type\":\"Continent\",\"description\":\"Am\u00E9rica del Sur\"}]}],\"clusters\":[{\"id\":1,\"validatingCarrier\":\"4M\",\"codeshare\":true,\"prices\":{\"passengerPrice\":[{\"net\":12282,\"tax\":3201.5,\"sel\":15483.5,\"type\":\"Adult\",\"providerCode\":\"ADT\"}],\"itineraryPrice\":{\"net\":12282,\"tax\":3201.5,\"afip\":0,\"charge\":2012.855,\"sel\":17496.355}},\"groupLegs\":[{\"legs\":[0]},{\"legs\":[1]}]}],\"flights\":[{\"refNumber\":0,\"number\":\"6441\",\"marketing\":\"4M\",\"operating\":\"AA\",\"segments\":[{\"bookingClass\":\"O\",\"departure\":\"EZE\",\"arrival\":\"MIA\",\"departureDate\":\"2017-12-18 21:50\",\"arrivalDate\":\"2017-12-19 05:01\"}]},{\"refNumber\":1,\"number\":\"6946\",\"marketing\":\"LA\",\"operating\":\"LA\",\"segments\":[{\"bookingClass\":\"O\",\"departure\":\"MIA\",\"arrival\":\"SCL\",\"departureDate\":\"2017-12-25 19:55\",\"arrivalDate\":\"2017-12-26 06:25\"}]},{\"refNumber\":2,\"number\":\"449\",\"marketing\":\"LA\",\"operating\":\"LA\",\"segments\":[{\"bookingClass\":\"S\",\"departure\":\"SCL\",\"arrival\":\"EZE\",\"departureDate\":\"2017-12-26 08:20\",\"arrivalDate\":\"2017-12-26 10:20\"}]}],\"legs\":[{\"refNumber\":0,\"tripProductId\":\"2b3eac1f-10d1-4100-835c-2d861aad0b30\",\"duration\":551,\"flightsRef\":[0]},{\"refNumber\":1,\"tripProductId\":\"75267b34-8f95-455d-a218-e2b8019081a1\",\"duration\":745,\"flightsRef\":[1,2]}],\"externalSearchId\":\"f0bb7e42-9d54-410f-9e17-97efd8ca66c9\",\"type\":\"flight\"}]}";

storiesOf('avantrip/Checkout', module)
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
