import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ key, name, DefaultPoints, BusinessPoints }) => (

    <div key={key}>
      <div>{ name }</div>
      <div>{ DefaultPoints }</div>
      <div>{ BusinessPoints }</div>
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
