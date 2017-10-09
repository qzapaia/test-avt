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
  name: PropTypes.string.isRequired,
  defaultPoints: PropTypes.number.isRequired,
  businessPoints: PropTypes.number.isRequired

}

Item.defaultProps = {
  name:'',
  defaultPoints: '',
  businessPoints: ''
}

export default Item;
