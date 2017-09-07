import styled from 'styled-components'
import PropTypes from 'prop-types'
import types from './types'

const StyledText = styled.span`
  font-size: ${props=>types[props.type].size};
  font-weight: ${props=>types[props.type].weight};
  font-family: ${props=>types[props.type].family};
  color: ${props=>props.theme.colors[props.color] || 'inherit'};
`
StyledText.propTypes = {
  type:PropTypes.oneOf(Object.keys(types)),
  color:PropTypes.string
}

StyledText.defaultProps = {
  type:'s'
}

export default StyledText;
