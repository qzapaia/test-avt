import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextoLoco = styled.div`
  color:${props=>props.theme.color || 'red'}
`

const Test = ({text, onClick}) => (
  <div onClick={onClick}>
    <TextoLoco>Hola</TextoLoco>
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
