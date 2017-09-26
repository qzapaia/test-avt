import React from 'react';
import PropTypes from 'prop-types';

const Chip = ({label, isDeletable, onClose}) => (

  <div style={{display:'flex', backgroundColor:'lightgrey'}}>
    <div style={{margin:'16px'}} >{label}</div>
    
    { isDeletable && 
      <div onClick={e => onClose()} style={{margin:'16px', backgroundColor:'grey'}}>X</div>
    }
  </div>
)

Chip.propTypes = {
  label: PropTypes.string,
  isDeletable: PropTypes.bool,
  onClose: PropTypes.func
}

export default Chip;
