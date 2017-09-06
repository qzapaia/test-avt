import styled from 'styled-components';

const StyledText = styled.button`
  border:solid 2px red;
  padding:20px;
  font-size: 16px;
`
StyledText.defaultProps = {
  size:'s'
}

export default StyledText;
