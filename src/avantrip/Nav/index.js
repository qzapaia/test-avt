import React from 'react';
import PropTypes from 'prop-types';

import {NavList, Item, LinkNav, LinkText} from './container.styled';
import Link from '../Link';
import Text from '../Text';
// import Item from './Item.styled';
// import LinkNav from './LinkNav.styled';

const getCurrentPage = (pathname) =>{
  let currentPage;
  switch (pathname) {
    case "/hoteles/":
      currentPage = "hoteles";
      break;
    case "/vuelos/":
    default:
      currentPage = "vuelos";
  }
  return currentPage;
}

const Nav = ({currentPathname, children}) => {
  let currentPage = getCurrentPage(currentPathname);
  return (
    <NavList>
      <Item>
        <LinkNav isActive={currentPage == 'vuelos'}>
          <Link href="http://www.avantrip.com/vuelos/">
            <LinkText color='primary' type='s'>
              Vuelos
            </LinkText>
          </Link>
        </LinkNav>
      </Item>
      <Item>
        <LinkNav isActive={currentPage == 'hoteles'}>
          <Link href="http://www.avantrip.com/hoteles/">
            <LinkText color='primary' type='s'>
              Hoteles
            </LinkText>
          </Link>
        </LinkNav>
      </Item>
      <Item>
        <LinkNav isActive={currentPage == 'paquetes'}>
          <Link href="http://www.avantrip.com/paquetes/">
            <LinkText color='primary' type='s'>
              Paquetes
            </LinkText>
          </Link>
        </LinkNav>
      </Item>
      <Item>
        <LinkNav isActive={currentPage == 'autos'}>
          <Link href="http://www.avantrip.com/autos/">
            <LinkText color='primary' type='s'>
              Autos
            </LinkText>
          </Link>
        </LinkNav>
      </Item>
      <Item>
        <LinkNav isActive={currentPage == 'pases'}>
          <Link href="http://pasesdisney.avantrip.com/">
            <LinkText color='primary' type='s'>
              Pases Disney
            </LinkText>
          </Link>
        </LinkNav>
      </Item>
      <Item>
        <LinkNav isActive={currentPage == 'cruceros'}>
          <Link href="http://www.avantrip.com/cruceros/">
            <LinkText color='primary' type='s'>
              Cruceros
            </LinkText>
          </Link>
        </LinkNav>
      </Item>
      <Item>
        <LinkNav isActive={currentPage == 'seguros'}>
          <Link href="http://www.avantrip.com/asistencia-al-viajero/">
            <LinkText color='primary' type='s'>
              Seguros
            </LinkText>
          </Link>
        </LinkNav>
      </Item>
    </NavList>
  );
}

Nav.propTypes = {
  currentPathname: PropTypes.string.isRequired
}

export default Nav;
