import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledItem = styled.li`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  text-align: center;
  width: 13.75%;
  z-index: 100;
`

StyledItem.propTypes = {
  isActive: PropTypes.bool
}

StyledItem.defaultProps = {
  isActive: false
}

export default StyledItem;
