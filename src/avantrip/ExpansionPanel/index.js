import React from 'react';
import PropTypes from 'prop-types';

const ExpansionPanel = ({
    summaryInformation,
    extendedInformation,
    expanded,
    onChange}) => (

  <div>
    <div onClick={e => onChange(!expanded)}>
      {summaryInformation}
    </div>
    <div onClick={e => onChange(!expanded)}>
      {expanded && extendedInformation}
    </div>
  </div>
)

ExpansionPanel.propTypes = {
  summaryInformation: PropTypes.node,
  extendedInformation: PropTypes.node,
  expanded:PropTypes.bool,
  onChange: PropTypes.func
}

ExpansionPanel.defaultProps = {
  expanded: false
}

export default ExpansionPanel;
