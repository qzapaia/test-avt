import React from 'react';
import Paginate from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PaginateWithData from "./withData";

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import reducer from "../../global/Paginate/reducer";

import { random } from 'lodash';

const randomPagesCount = random(20);

let search = {
  origin: "BUE",
  destination: "COR",
  departureDate: "11-03-2018",
  returningDate: "20-03-2018",
  passengers: {
    adults: 1,
    children: 0,
    infants:0
  },
  cabinClass: "Economy",
  channel: "DESKTOP",
  portal:"AVANTRIP"
}

storiesOf('avantrip/Paginate', module)
  .addDecorator(
    generalDecorator({
      readme,
      theme,
      reducer: {
        paginate: reducer
      }
    })
  )
  .add('Default', () => (
    <Paginate pagesCount={randomPagesCount} ></Paginate>
  ))
  .add('With Data',()=> (
    <PaginateWithData 
      origin={search.origin}
      destination={search.destination}
      departureDate={search.departureDate}
      returningDate={search.returningDate}
      passengersAdults={search.passengers.adults}
      passengersChildren= {search.passengers.children}
      passengersInfants={search.passengers.infants}
      cabinClass={search.cabinClass}
      channel={search.channel}
      portal={search.portal} />
  ))
