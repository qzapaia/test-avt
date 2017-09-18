import React from 'react';

import ContainerBreadcrumb from './container.styled';

const Breadcrumb = ({children}) => {
  const numberOfChildren = children.length-1;

  return (<ContainerBreadcrumb>
    {
      children.map((child, index) =>{
        return (
          <div key={index}>
            {child}
            { index != numberOfChildren && ">" }
          </div>
        )
      })
    }
  </ContainerBreadcrumb>
)}

export default Breadcrumb;
