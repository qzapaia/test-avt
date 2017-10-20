import React from 'react';
import PropTypes from 'prop-types';
import { Container, NavContainer, TabButton, ExpandedContent } from './styled';
import { withState } from "recompose";
import { get, head,compact } from "lodash";

const Tab = ({id, title, children}) => (
  <div>
    {children}
  </div>
)

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired
}

const enhace = withState('selectedTab', 'setTab', null);

const Tabs = ({selectedTab, setTab, children}) => {
  const childs = compact(children, c => c != false)
  const currentSelectedTab = selectedTab || get(head(children), "props.id", null);

  return(
    <Container>
      <NavContainer>
        {childs.map(c =>(
          <TabButton key={c.props.id} onClick={e=>setTab(c.props.id)}>
            {c.props.title}
          </TabButton>
        ))}
      </NavContainer>
      <ExpandedContent>
        {childs.find(c =>(currentSelectedTab==c.props.id))}
      </ExpandedContent>
    </Container>
  )
}

Tabs.propTypes = {
  selectedTab: PropTypes.string,
  setTab: PropTypes.func,
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

const TabsWithState = enhace(Tabs);

export { TabsWithState as default, Tab};
