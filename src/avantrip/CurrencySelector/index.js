import React from 'react'; 
import PropTypes from 'prop-types';

const CurrencySelector = ({options, onClick, value}) => (
  <span>
    {options.map(option => (
      <span>
        {(option.value != value) ? 
          <a
            key={option.value}
            onClick = { () => onClick(option.value.toString()) }
            value={option.value}>{option.label}</a>
            :
            <span key={option.value}>{option.label}</span>
          }
          {
            (!option.isLast) ? 
              <span> - </span>
            :
              ''
          }
        </span>
      ))}
  </span>
);

CurrencySelector.propTypes = {
  value: PropTypes.node.isRequired
}

CurrencySelector.defaultProps = {
  value: 1
}

export default CurrencySelector;
