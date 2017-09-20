import React from 'react';
import PropTypes from 'prop-types';

const ExpansionPanel = ({
    SummaryInformation,
    ExtendedInformation,
    expanded,
    onChange}) => (
      <div>
       <SummaryInformation
         onChange={()=>onChange(!expanded)}
         expanded={expanded}/>
         
       {expanded && <ExtendedInformation
           onChange={()=>onChange(!expanded)}
           expanded={expanded} />}
      </div>
)

ExpansionPanel.propTypes = {
  SummaryInformation: PropTypes.func,
  ExtendedInformation: PropTypes.func,
  expanded:PropTypes.bool,
  onChange: PropTypes.func
}

ExpansionPanel.defaultProps = {
  expanded: false
}

export default ExpansionPanel;
