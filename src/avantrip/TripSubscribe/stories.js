import React from 'react';
import TripSubscribe from './';

import Text from '../Text';
import Icon from '../Icon';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('value','changeValues',{
  city: "Miami"
});

const TripSubscribeWithState =  enhace((props) => {
  const { changeValues, value } = props;

  const onChangeHandler = (changedValue) => {
    changedValue = Object.assign(value, changedValue);
    action('onChange')('Change Value: ' + JSON.stringify(changedValue));
    changeValues(changedValue);
  }

  return (
    <TripSubscribe
      {...props}
      onChange={onChangeHandler}
      title={
        <Text><Icon id="Notifications" size="l"></Icon>`Te avisamos cuando tengamos los precios
        más bajos a ${value.city}.`</Text>
      }
      onSubscribe={action('subscribe sent')}
      value={value} />
  )
})

storiesOf('avantrip/TripSubscribe', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <TripSubscribeWithState
    />
  ))
  .add('Successful subscription', () => (
    <TripSubscribeWithState
      state="success"
    />
  ))
  .add('Failed subscription', () => (
    <TripSubscribeWithState
      state="error"
    />
  ))
