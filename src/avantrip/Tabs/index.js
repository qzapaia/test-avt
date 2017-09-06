import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({selectedTab, onChange, children}) => (
  <div>

    <nav>
        {children.map((c,i)=>(
            <button key={i} onClick={e=>onChange(i)}>
                {c.props.title} 
            </button>
        ))}
    </nav>
    <div>
        {children.find((c,i)=>selectedTab==i)}
    </div>
  </div>
)

Tabs.propTypes = {
  selectedTab: PropTypes.number,
  onChange: PropTypes.func
}

Tabs.default = {
  selectedTab: 0
}

export default Tabs;
