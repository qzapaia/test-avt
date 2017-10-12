import React from 'react';
import PropTypes from 'prop-types';

import {NavList, Item, LinkNav, LinkText, LinkContainer, MaxWidth} from './styled';
import Link from '../Link';
import Text from '../Text';
import Icon from '../Icon';
import { ThemeProvider } from 'styled-components';
import { defaults } from 'lodash';

//Defino el theme por default, parentTheme lo envia los objectos que extienden global.
const baseTheme = (parentTheme) => defaults(parentTheme,{
  ulJustifyContent : "space-between",
  liMaxWidth: "100px",
  divLineHeight: "24px",
  divHoverColor: "black",
  divHoverBgColor: "transparent",
  divBeforeBgColor: parentTheme.colors.alert
});

const Nav = ({currentPathname, children}) => {

  const getCurrentPage = (pathname) =>{
    let currentPathname;
    currentPathname = pathname.replace(/\//g,'');
    return currentPathname;
  }

  const currentPage = getCurrentPage(currentPathname);

  return (
    <ThemeProvider theme={baseTheme}>
      <NavList>
        <MaxWidth>
        {children.map( item =>
            <Item>
              <LinkNav isActive={ currentPage == item.props.id }>
                <LinkContainer href={ item.props.href }>
                  <Icon id={ item.props.icon } width='18px' height='18px' />
                  <LinkText color='primary' type='s'>
                    { item.props.children }
                  </LinkText>
                </LinkContainer>
              </LinkNav>
            </Item>
        )}
        </MaxWidth>
      </NavList>
    </ThemeProvider>
  )
}

Nav.propTypes = {
  currentPathname: PropTypes.string.isRequired
}

export default Nav;
