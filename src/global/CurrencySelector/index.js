import React from 'react';
import PropTypes from 'prop-types';

const CurrencySelector = ({options, onClick, value}) => {

return(
  <span>
    {options.map((option, idx) => (
      <span>
        {(option.value != value) ?
          <a
            onClick = { () => onClick(option.label.toString()) }
            value={option.label}>{option.label}</a>
          :
            <span key={option.value}>{option.label}</span>
          }
          { options.length - 1 != idx &&
              <span> - </span>
          }
        </span>
      ))}
  </span>
);
}
CurrencySelector.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func
}

export default CurrencySelector;
