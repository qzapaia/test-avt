import React from 'react';
import ExpansionPanel from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('expanded','changeState',false);
const ExpansionPanelWithState =  enhace((props) => {
  const { expanded, changeState } = props;

  const changeHandler = (expandedParam) => {
    action('Is Extended')(expandedParam);
    changeState(expandedParam);
  }

  return (
    <ExpansionPanel {...props}
      expanded={expanded}
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
      SummaryInformation={({onChange, expanded}) =>
        <div>SummaryInformation
          <button onClick={onChange}> {expanded ? 'cerrar' : 'abrir'} </button>
        </div>
      }
      ExtendedInformation={({onChange}) =>
        <div>ExtendedInformation
          <button onClick={onChange}> Ver menos </button>
        </div>} />
  ))
