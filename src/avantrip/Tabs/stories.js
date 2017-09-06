import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import readme from './README.md';
import { withState } from 'recompose';

import Tabs from './';

let enhance = withState('selectedtab', 'setTab', 0);


const TabWithStoreAndFirstChildrenSelected = enhance(({ selectedtab, setTab }) =>
    <Tabs onChange={setTab} selectedTab={selectedtab}>
        <div title="title1" content="content1">children 1</div>
        <div title="title2" content="content2">children 2</div>
        <div title="title3" content="content3">children 3</div>
    </Tabs>
);

storiesOf('avantrip/Tabs', module)
   .add('Default', () => <TabWithStoreAndFirstChildrenSelected />)
