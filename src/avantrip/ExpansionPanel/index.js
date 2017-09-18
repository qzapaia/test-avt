import React from 'react';
import PropTypes from 'prop-types';

const ExpansionPanel = ({
    SummaryInformation,
    ExtendedInformation,
    isExpanded,
    onChange}) => (
      <div>
       <SummaryInformation
         onChange={()=>onChange(!isExpanded)} />
       { isExpanded && <ExtendedInformation
           onChange={()=>onChange(!isExpanded)} />}
      </div>
)

ExpansionPanel.propTypes = {
  SummaryInformation: PropTypes.func,
  ExtendedInformation: PropTypes.func,
  isExpanded:PropTypes.bool,
  onChange: PropTypes.func
}

ExpansionPanel.defaultProps = {
  isExpanded: false
}

export default ExpansionPanel;
