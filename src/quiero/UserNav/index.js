import React from 'react';
import PropTypes from 'prop-types';

import {StyledUserNav, StyledPipe, StyledLinkUserNav} from './styled';
import Text from '../Text';
import Link from '../Link';

const UserNav = ({ qvUserData, onLogout }) => (
  <div>
    <StyledUserNav>
      <StyledLinkUserNav icon={<span>Icon</span>} href={ `/mis-cotizaciones/${qvUserData.quoteId}` }>
        <Text type="s">
        { qvUserData.messageNumber }
        </Text>
      </StyledLinkUserNav>
      <Text type="m" color="primary"><strong>{ qvUserData.userName }</strong></Text>
      <div>
          <Text type="s">Mis puntos:</Text>
          <Text type="s" color="secondary"><strong>{ qvUserData.points }!</strong></Text>
      </div>
      <div>
          <Link href="#"><Text type="s" color="brand">Mis Canjes en Viajes y Turismo</Text></Link>
          <StyledPipe>|</StyledPipe>
          <Link href="#"><Text type="s" color="brand">Cerrar sesión</Text></Link>
      </div>
    </StyledUserNav>
  </div>
)

UserNav.propTypes = {
  qvUserData : PropTypes.object.isRequired,
  onLogout : PropTypes.func.isRequired
}

UserNav.defaultProps = {
  qvUserData : {
      messageNumber : "",
      userName : "",
      points : "",
      quoteId : "", //quoteId es el identificador de cotizaciones del usuario autenticado en QV }
    }
}

export default UserNav;
