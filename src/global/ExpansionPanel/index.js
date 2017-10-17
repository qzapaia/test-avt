import React from 'react';
import PropTypes from 'prop-types';

import {withState} from "recompose";

const enhace = withState("isExpanded", "onChange", false);

const ExpansionPanel = ({
    SummaryInformation,
    ExtendedInformation,
    isExpanded,
    onChange}) => (
      <div>
        {console.log("isExpanded", isExpanded)}
       <SummaryInformation
         onChange={()=>onChange(!isExpanded)}
         isExpanded={isExpanded}/>
       {isExpanded && <ExtendedInformation
           onChange={()=>onChange(!isExpanded)}
           isExpanded={isExpanded} />}
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

export default enhace(ExpansionPanel);
