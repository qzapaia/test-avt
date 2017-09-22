import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledText = styled.span`
  font-size: ${props=>props.theme.texts[props.type].size};
  font-weight: ${props=>props.theme.texts[props.type].weight};
  font-family: ${props=>props.theme.texts[props.type].family};
  color: ${props=>props.theme.colors[props.color] || 'inherit'};
`

const TextWrapper = (props) => {
  const Com = StyledText.withComponent(props.tag);
  return <Com {...props}></Com>
}

TextWrapper.propTypes = {
  type:PropTypes.string,
  color:PropTypes.string
}

TextWrapper.defaultProps = {
  type:'s',
  weight:'normal',
  tag:'span'
}

export default TextWrapper;
