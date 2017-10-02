import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLinkNav = styled.div`
  :hover {
    border-top: 3px solid #666;
  }
  color: ${props=>props.isActive ? '#000' : '#0091d1'};
  border-top: ${props=>props.isActive ? '3px solid #666' : '3px solid transparent'};
  text-decoration: none;
  display: block;
  line-height: 36px;
  transition: all .2s ease-in-out 0s;
`

StyledLinkNav.propTypes = {
  isActive: PropTypes.bool
}

StyledLinkNav.defaultProps = {
  isActive: false
}

export default StyledLinkNav;
