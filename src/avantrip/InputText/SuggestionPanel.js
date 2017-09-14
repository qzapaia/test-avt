import React from 'react';
import PropTypes from 'prop-types';

const SuggestionPanel = ({
  options
}) => (
  <div onClick={onClick}>
    {children}
  </div>
)

SuggestionPanel.propTypes = {

}

SuggestionPanel.defaultProps = {

}

export default SuggestionPanel;
