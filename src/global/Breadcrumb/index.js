import React from 'react';

import {ContainerBreadcrumb, Arrow} from './styled';

const Breadcrumb = ({children}) => {
  const numberOfChildren = children.length-1;

  return (<ContainerBreadcrumb>
    {
      children.map((child, index) =>{
        return (
          <li key={index}>
            {child}
            { index != numberOfChildren && <Arrow>></Arrow> }
          </li>
        )
      })
    }
  </ContainerBreadcrumb>
)}

export default Breadcrumb;
