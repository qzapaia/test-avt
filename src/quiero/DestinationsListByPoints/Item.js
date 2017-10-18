import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

const Item = ({ name, defaultPoints, businessPoints }) => {

    return <div>
      <Text tag="p" type="m" color="brand">{ name }</Text>
      <Text tag="p" type="m" color="secondary">{ defaultPoints }</Text>
      { businessPoints && <Text tag="p" type="m" color="blue">{businessPoints}</Text> }
    </div>
}

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
