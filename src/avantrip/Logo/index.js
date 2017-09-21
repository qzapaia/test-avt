import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLogo = styled.a`
  background: url(https://cdn.avantrip.com/static/images/logo.png) center no-repeat;
  background-size: cover;
  display: inline-block;
  width: 66px;
  height: 66px;
`

StyledLogo.propTypes = {
  size: PropTypes.oneOf(['s'])
}

StyledLogo.defaultProps = {
  size:'s'
}

export default StyledLogo;
