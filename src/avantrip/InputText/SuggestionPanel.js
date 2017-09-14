import React from 'react';
import PropTypes from 'prop-types';

const SuggestionPanel = ({
  options,
  onChange,
  children,
}) => (
  <div>
    {children.map(o=>(
      <div onClick={()=>onChange(o.props.value)}>
        {o}
      </div>
    ))}
  </div>
)

SuggestionPanel.propTypes = {

}

SuggestionPanel.defaultProps = {

}

export default SuggestionPanel;
