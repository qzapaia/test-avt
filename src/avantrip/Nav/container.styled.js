import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../Text';


export const NavList = styled.ul`
  overflow: hidden;
  text-align: left;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const Item = styled.li`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  text-align: center;
  flex: 1;
  max-width: 100px;
  z-index: 100;
  a{
    flex: 1;
  }
`
export const LinkNav = styled.div`
  :hover {
    border-top: 3px solid #666;
    color: black;
  }
  color: ${props=>props.isActive ? 'black' : props.theme.colors.primary};
  border-top: ${props=>props.isActive ? '3px solid #666' : '3px solid transparent'};
  text-decoration: none;
  display: flex;
  justify-content: center;
  line-height: 36px;
  transition: all .2s ease-in-out 0s;
`

LinkNav.propTypes = {
  isActive: PropTypes.bool
}

LinkNav.defaultProps = {
  isActive: false
}

export const LinkText = Text.extend`
  color: currentColor;
`
