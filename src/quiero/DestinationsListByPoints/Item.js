import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ name, defaultPoints, businessPoints }) => (

    <div>
      <div>{ name }</div>
      <div>{ defaultPoints }</div>
      <div>{ businessPoints }</div>
    </div>
)

Item.propTypes = {
  id: PropTypes.number.isRequired,
  destinoNombre: PropTypes.string.isRequired,
  rango: PropTypes.number.isRequired
}

Item.defaultProps = {
  destinoNombre:'',
  rango: 0
}

export default Item;
