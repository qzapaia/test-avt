import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledColors = styled.div`
  background-color: ${props=>props.theme.colors[props.color]};
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color:white;
  font-size: 25px;
  margin: 10px;
`

StyledColors.propTypes = {
  color: PropTypes.string.required
}


export default StyledColors;
