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
  onChange: PropTypes.func,
  children: (props, propName, componentName) => {
    let isInvalid = props[propName].some(child => {
      return !/Tab/.test(child.type.name);
    })
    if (isInvalid) {
      return new Error(
        'Invalid children. Only accept `Tab` children for ' +
        ' `' + componentName + '`.'
      );
    }
  }
}

export default Tabs;
