import styled from 'styled-components';
import PropTypes from 'prop-types';

const Link = styled.a`
color: ${props=> props.theme.linkColor};
text-decoration: ${props=> props.theme.linkDeco};
:hover{
  text-decoration: ${props=> props.theme.decoHover};
}
:visited {
  text-decoration: ${props=> props.theme.decoVisited};
}
`

export default Link;
