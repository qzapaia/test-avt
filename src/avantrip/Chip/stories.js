import React from 'react';
import Chip from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import ChipWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = compose(
  withState('label','changeLabel', 'Label del chip'),
  withState('isDeletable','changeIsDeletable', true)
)


const ChipWithState =  enhace((props) => {
  const { 
    label, 
    changeLabel,
    isDeletable,
    changeIsDeleteable
  } = props;

  const closeHandler = () => {
    action('click')('close');
  }

  return (
    <Chip label={label} onClose={closeHandler} isDeletable={isDeletable} />
  )
})

storiesOf('avantrip/Chip', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <ChipWithState></ChipWithState>
  ))

  .add('With data', () => (
    <ChipWithData>ChipWithData component</ChipWithData>
  ))
