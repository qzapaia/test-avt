import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ id, destinoNombre, rango, rangoBusiness }) => (

    <div key={id} id={id}>
      <div>{ destinoNombre }</div>
      <div>{ rango }</div>
      <div>{ rangoBusiness && rangoBusiness }</div>
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
