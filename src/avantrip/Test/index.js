import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Cont = styled.div`
  background-color: blue;
  width: 200px;
  height: 200px;
`

const Test = ({text, onClick}) => (
  <div onClick={onClick}>
    <Cont></Cont>
    Test component
    <br/>
    Counter {text}
    <br/>
    <strong>Click to increment</strong>
  </div>
)

Test.propTypes = {
  text: PropTypes.node.isRequired
}

Test.defaultProps = {
  text:'no value yet :('
}

export default Test;
