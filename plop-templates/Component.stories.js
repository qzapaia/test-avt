import React from 'react'
import {{componentName}} from './'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
{{^styledComponent}}
import { withState, compose } from 'recompose'
{{/styledComponent}}

import generalDecorator from '../../stories.decorator.js';
{{#withDataComponent}}
import {{componentName}}WithData from './withData'
{{/withDataComponent}}

import theme from '../styled.theme';
import readme from './README.md'

{{^styledComponent}}
const enhace = withState('counter','increment',0);
const {{componentName}}WithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <{{componentName}} {...props} text={counter} onClick={clickHandler} />
  )
})
{{/styledComponent}}

storiesOf('{{storyPath}}{{componentName}}', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    {{^styledComponent}}
    <{{componentName}}WithState></{{componentName}}WithState>
    {{/styledComponent}}
    {{#styledComponent}}
    <{{componentName}}>{{componentName}} component</{{componentName}}>
    {{/styledComponent}}
  ))

  {{#withDataComponent}}
  .add('With data', () => (
    <{{componentName}}WithData>{{componentName}}WithData component</{{componentName}}WithData>
  ))
  {{/withDataComponent}}
