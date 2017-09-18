import React from 'react';
import ExpansionPanel from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('isExpanded','changeState',false);
const ExpansionPanelWithState =  enhace((props) => {
  const { isExpanded, changeState } = props;

  const changeHandler = (isExpandedParam) => {
    action('Is Extended')(isExpandedParam);
    changeState(isExpandedParam);
  }

  return (
    <ExpansionPanel {...props}
      isExpanded={isExpanded}
      onChange={changeHandler} />
  )
})

storiesOf('avantrip/ExpansionPanel', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Con los dos nodos completos', () => (
    <ExpansionPanelWithState
      SummaryInformation={({onChange}) =>
        <div>SummaryInformation
          <button onClick={onChange}> v </button>
        </div>
      }
      ExtendedInformation={({onChange}) =>
        <div>ExtendedInformation
          <button onClick={onChange}> Ver menos </button>
        </div>} />
  ))
