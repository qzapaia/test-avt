import React from 'react'; 
import PropTypes from 'prop-types';

const CurrencySelector = ({options, onClick, value}) => (
  <span>
    {options.map((option, idx) => (
      <span>
        {(option.value != value) ? 
          <a
            onClick = { () => onClick(option.value.toString()) }
            value={option.value}>{option.label}</a>
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

CurrencySelector.propTypes = {
  value: PropTypes.number.isRequired,
  option: PropTypes.array.isRequired,
  onClick: PropTypes.func
}

export default CurrencySelector;
