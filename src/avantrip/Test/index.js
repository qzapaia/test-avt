import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD

const Test = ({text, onClick}) => (
  <div onClick={onClick}>
=======
import styled from 'styled-components';
import image from './image';

const Cont = styled.div`
  background-color: blue;
  background-image: url(${image});
  width: 200px;
  height: 200px;
`


const Test = ({text, onClick}) => (
  <div onClick={onClick}>
    <Cont></Cont>
>>>>>>> master
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
