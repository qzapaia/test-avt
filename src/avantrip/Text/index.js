import styled from 'styled-components'
import PropTypes from 'prop-types'
import types from './types'

const StyledText = styled.span`
  font-size: ${props=>props.theme.sizes[props.type]};
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
