import React from 'react'
import InputRadio from './'

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
const enhace = withState('selectedValue','changeValue',false);
const InputRadioWithState =  enhace((props) => {
  // enchufar tu component con el estado simulado
  const { selectedValue, changeValue } = props;

  const clickHandler = (selectedValue) => {
    action('onChange')(selectedValue);
    changeValue(selectedValue);
  }
  return (
    <InputRadio {...props}
      checked={selectedValue == props.value}
      onChange={clickHandler}/>
  )
})

storiesOf('avantrip/InputRadio', module)
  .add('Default', addReadme(() => (
    <ThemeProvider theme={theme}>
      <InputRadioWithState
        id = "1"
        name ="radio1"
        value ="1"
        label = {<span>Custom Label</span>} />
    </ThemeProvider>
  )))
