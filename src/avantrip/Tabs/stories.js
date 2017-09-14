import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { withState } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import Tabs from './';

let enhance = withState('selectedtab', 'setTab', "1");

const TabWithStoreAndFirstChildrenSelected = enhance(({ selectedtab, setTab }) =>
    <Tabs onChange={setTab} selectedTab={selectedtab}>
        <div id="1" title="title1">content 1</div>
        <div id="2" title="title2">content 2</div>
        <div id="3" title="title3">content 3</div>
    </Tabs>
);

storiesOf('avantrip/Tabs', module)
   .addDecorator(generalDecorator({
      readme,
      theme
    }))
   .add('Default', () => <TabWithStoreAndFirstChildrenSelected />)
