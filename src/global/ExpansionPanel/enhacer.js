import React from 'react';
import { withState } from 'recompose';
import { isUndefined } from 'lodash';

const enhace = withState('expanded', 'expand', ({expanded}) => expanded || false);

export default Com => enhace((props)=>{
  return <Com
    {...props}
    expanded={props.expanded}
    expand={props.expand}
    toggleExpand={()=>props.expand(!props.expanded)}
  />
})
