import React from 'react';
import { withState } from 'recompose';

const enhace = withState('expanded', 'expand', false);

export default Com => enhace((props)=>(
  <Com
    {...props}
    expanded={props.expanded}
    expand={props.expand}
    toggleExpand={()=>props.expand(!props.expanded)}
  />
))
