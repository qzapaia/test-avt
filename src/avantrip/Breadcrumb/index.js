import React from 'react';

import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbSeparator from '../BreadcrumbSeparator';
import ContainerBreadcrumb from './container.styled';

const Breadcrumb = ({children}) => {
  const numberOfChildren = children.length-1;

  return (<ContainerBreadcrumb>
    {
      children.map((child, index) =>{
        let isLastChild = index == numberOfChildren;
        return (<BreadcrumbItem key={index}>
          { isLastChild ||
            <BreadcrumbSeparator>
              {child}
            </BreadcrumbSeparator>
          }
          { isLastChild &&
            child
          }
        </BreadcrumbItem>
      )})
    }
  </ContainerBreadcrumb>
)}

export default Breadcrumb;
