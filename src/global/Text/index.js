import React, {createElement} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextWrapper = styled(({tag, children, ...props}) => createElement(tag, props, children))`
  font-size: ${props=>props.theme.texts[props.type].size};
  font-weight: ${props=>props.theme.texts[props.type].weight};
  font-family: ${props=>props.theme.texts[props.type].family};
  color: ${props=>props.theme.colors[props.color] || 'inherit'};
`


TextWrapper.propTypes = {
  type:PropTypes.string,
  color:PropTypes.string
}

TextWrapper.defaultProps = {
  type:'s',
  tag:'span'
}

export default TextWrapper;
