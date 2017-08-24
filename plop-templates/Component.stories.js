import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {{componentName}} from './'

{{#withDataComponent}}
import {{componentName}}WithData from './withData'
import { Provider } from '../../apollo-client'
{{/withDataComponent}}

import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

storiesOf('{{storyPath}}{{componentName}}', module)
  .add('Default', addReadme(() => (
    <{{componentName}}>{{componentName}} component</{{componentName}}>
  )))
  {{#withDataComponent}}
  .add('With data', addReadme(() => (
    <Provider>
      <{{componentName}}WithData>{{componentName}}WithData component</{{componentName}}WithData>
    </Provider>
  )))
  {{/withDataComponent}}
