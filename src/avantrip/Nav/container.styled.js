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
    flex: 1 1 100%;
  }
`
export const LinkNav = styled.div`
  &:hover {
    color: black;
    &::before{
      flex-basis: 100%;
      background: ${props=> props.theme.colors.darkergray}
    }
  }
  color: ${props=>props.isActive ? 'black' : props.theme.colors.primary};
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  line-height: 36px;
  &::before{
    content: "";
    display: flex;
    flex-basis: ${props=>props.isActive ? '100%' : '15px'};
    height: 3px;
    transition: all .2s ease-in-out 0s;
    background: ${props=>props.isActive ? props.theme.colors.darkergray : 'transparent'};
  }
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
