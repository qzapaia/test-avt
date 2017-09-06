import React from 'react'
import RadiosGroup from './'

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
    key: 1,
    label: "Todos los horarios",
    checked: true
},
{
    key: 2,
    label: "8hs a 12hs",
    checked: false
}];

const enhace = withState('options','increment',initialOptions);
const RadiosGroupWithState =  enhace((props) => {
  const { options, increment } = props;

  const onChangeHandler = (e) => {
    options.map((option) => {
        if(option.key == e){
            option.checked = !option.checked;
            action('onChange')(option.label);
            return true;
        }
        option.checked = false;
        return false;
    });

    increment(options);
  }

  return (
    <RadiosGroup options={options}
        onChange={onChangeHandler} label={props.children}>
    </RadiosGroup>
  )
})

storiesOf('avantrip/RadiosGroup', module)
  .add('Default', addReadme(() => (
    <ThemeProvider theme={theme}>
        <RadiosGroupWithState />
    </ThemeProvider>
  )))
  .add('With a Label', addReadme(() => (
    <ThemeProvider theme={theme}>
        <RadiosGroupWithState>
            <label>Horarios</label>
        </RadiosGroupWithState>
    </ThemeProvider>
  )))
