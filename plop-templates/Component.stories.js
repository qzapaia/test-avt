import React from 'react';
import { storiesOf } from '@storybook/react';

import {{componentName}} from './{{componentName}}{{componentExtension}}'
{{#withDataComponent}}
import {{componentName}}WithData from './{{componentName}}{{componentExtension}}WithData'
import { Provider } from './apollo-client'
{{/withDataComponent}}

storiesOf('{{storyDir}}{{componentName}}', module)
  .add('Default', () => (
    <{{componentName}}>{{componentName}} component</{{componentName}}>
  ))
  {{#withDataComponent}}
  .add('With data', () => (
    <Provider>
      <{{componentName}}WithData>{{componentName}}WithData component</{{componentName}}WithData>
    </Provider>
  ))
  {{/withDataComponent}}
