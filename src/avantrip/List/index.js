import React from 'react';
import PropTypes from 'prop-types';

import ContainerList from './container.styled';

const List = ({type, children}) => (
  <ContainerList type={type}>
    {children.map(child => (
      <li key={child.props.id}>{child}</li>
    ))}
  </ContainerList>
)

List.propTypes = {
  type: PropTypes.oneOf(['list', 'grid'])
}

export default List;
