import React from 'react';
import { storiesOf } from '@storybook/react';

import {{componentName}} from './{{componentName}}{{componentExtension}}'

storiesOf('{{storyDir}}{{componentName}}', module)
  .add('Default', () => (
    <{{componentName}}>{{componentName}} component</{{componentName}}>
  ))
