import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledText = styled.span`
  font-size: ${props=>props.theme.texts[props.type].size};
  font-weight: ${props=>props.theme.texts[props.type].weight};
  font-family: ${props=>props.theme.texts[props.type].family};
  color: ${props=>props.theme.colors[props.color] || 'inherit'};
`
StyledText.propTypes = {
  type:PropTypes.string,
  color:PropTypes.string
}

StyledText.defaultProps = {
  type:'s'
}

export default StyledText;
