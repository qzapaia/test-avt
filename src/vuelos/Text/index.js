import styled from 'styled-components';

const sizes = {
  's':'16px',
  'm':'20px',
  'l':'28px',
}

const StyledText = styled.span`
  font-family: 'Avantrip';
  font-size: ${props=>sizes[props.size]}
`
StyledText.defaultProps = {
  size:'s'
}

export default StyledText;
