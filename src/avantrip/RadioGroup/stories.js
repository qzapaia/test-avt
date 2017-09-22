import React from 'react'
import RadioGroup from './'

import withReadme from 'storybook-readme/with-readme'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { withState, compose } from 'recompose'

import { ThemeProvider } from 'styled-components'

import theme from '../styled.theme';
import readme from './README.md'

const addReadme = comp => withReadme(readme, comp);

// el enhace concatena hocs de recompose,
// en este caso le inyecta un estado falso
// ver más en https://github.com/acdlite/recompose
let initialOptions = [{
  value: 1,
  label: "Todos los horarios"
},
{
    value: 2,
    label: "8hs a 12hs"
}];

const enhace = withState('value','selectOption',"1");
const RadioGroupWithState =  enhace((props) => {
  const { selectOption, value } = props;

  const onChangeHandler = (value) => {
    action('onChange')('Selected Option: ' + value);
    selectOption(value);
  }

  return (
    <RadioGroup
      options={initialOptions}
      onChange={onChangeHandler}
      label={props.children}
      value={value} />
  )
})

storiesOf('avantrip/RadioGroup', module)
  .add('Default', addReadme(() => (
    <ThemeProvider theme={theme}>
      <RadioGroupWithState />
    </ThemeProvider>
  )))
  .add('With a Label', addReadme(() => (
    <ThemeProvider theme={theme}>
      <RadioGroupWithState>
        <label>Horarios</label>
      </RadioGroupWithState>
    </ThemeProvider>
  )))
