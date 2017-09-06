import React from 'react';
import PropTypes from 'prop-types';

const RadiosGroup = ({options, onChange, label}) => (
  <div>
        {label}
  {
      options.map(c => (
        <label>
          <input id={ c.key } name="radio{c.key}" type="radio" value={ c.key } checked={c.checked} onChange={(e)=>(
              onChange(c.key)
          )}/>
          {c.label}
        </label>
      ))
  }
  </div>
)

RadiosGroup.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    label: PropTypes.node
}

export default RadiosGroup;
