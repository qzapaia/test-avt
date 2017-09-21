import React from 'react';
import PropTypes from 'prop-types';

import ContainerNav from './container.styled';
import Link from '../Link';
import Item from './Item.styled';
import LinkNav from './LinkNav.styled';

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
  return (<ContainerNav>
    <Item>
      <LinkNav isActive={currentPage == 'vuelos'}>
        <Link href="http://www.avantrip.com/vuelos/">
          Vuelos
        </Link>
      </LinkNav>
    </Item>
    <Item>
      <LinkNav isActive={currentPage == 'hoteles'}>
        <Link href="http://www.avantrip.com/hoteles/">
          Hoteles
        </Link>
      </LinkNav>
    </Item>
    <Item>
      <LinkNav isActive={currentPage == 'paquetes'}>
        <Link href="http://www.avantrip.com/paquetes/">
          Paquetes
        </Link>
      </LinkNav>
    </Item>
    <Item>
      <LinkNav isActive={currentPage == 'autos'}>
        <Link href="http://www.avantrip.com/autos/">
          Autos
        </Link>
      </LinkNav>
    </Item>
    <Item>
      <LinkNav isActive={currentPage == 'pases'}>
        <Link href="http://pasesdisney.avantrip.com/">
          Pases Disney
        </Link>
      </LinkNav>
    </Item>
    <Item>
      <LinkNav isActive={currentPage == 'cruceros'}>
        <Link href="http://www.avantrip.com/cruceros/">
          Cruceros
        </Link>
      </LinkNav>
    </Item>
    <Item>
      <LinkNav isActive={currentPage == 'seguros'}>
        <Link href="http://www.avantrip.com/asistencia-al-viajero/">
          Seguros
        </Link>
      </LinkNav>
    </Item>
  </ContainerNav>);
}

Nav.propTypes = {
  currentPathname: PropTypes.string.isRequired
}

export default Nav;
