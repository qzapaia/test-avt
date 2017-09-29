import React from 'react';
import Chip from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = compose(
  withState('label','changeLabel', 'Label del chip')
)

const ChipWithState =  enhace((props) => {
  const { label, changeLabel, withClose } = props;

  const closeHandler = () => {
    action('click')('close');
  }

  if(withClose){
    return (
      <Chip label={label} onClose={closeHandler} />
    )
  } else {
    return (
      <Chip label={label} />
    )
  }
})

storiesOf('avantrip/Chip', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <ChipWithState withClose={true}></ChipWithState>
  ))
  .add('WithoutClose', () => (
    <ChipWithState></ChipWithState>
  ))
