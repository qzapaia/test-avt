import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({selectedTab, onChange, children}) => (
  <div>
    <nav>
        {children.map(c =>(
            <button key={c.props.id} onClick={e=>onChange(c.props.id)}>
                {c.props.title}
            </button>
        ))}
    </nav>
    <div>
        {children.find(c =>(selectedTab==c.props.id))}
    </div>
  </div>
)

Tabs.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

export default Tabs;
