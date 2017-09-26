import React from 'react';
import PropTypes from 'prop-types';

const Chip = ({label, onClose}) => (
  <div style={{display:'flex', backgroundColor:'lightgrey'}}>
    <div style={{margin:'16px'}} >{label}</div>
    { onClose && 
      <div onClick={e => onClose()} style={{margin:'16px', backgroundColor:'grey'}}>X</div>
    }
  </div>
)

Chip.propTypes = {
  label: PropTypes.string,
  onClose: PropTypes.func
}

export default Chip;
