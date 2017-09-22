import React from 'react';
import PropTypes from 'prop-types';

const UserNav = ({ qvUserData, onLogout }) => (
  <div>
      <div>{ qvUserData.userName }</div>
        <div>
            <a href={ `/mis-cotizaciones/${qvUserData.quoteId}` }>
                <div>
                    <div>{ qvUserData.messageNumber }</div>
                </div>
            </a>
        </div>
      <div>
          Mis puntos: <strong>{ qvUserData.points }!</strong>
      </div>

      <div>
          <span>{ qvUserData.points }</span>
      </div>
      <div>
          <p>
            <a href="/mis-canjes" title="Mis Canjes en Viajes y Turismo">Mis Canjes en Viajes y Turismo</a>
            |
            <a href="" title="Cerrar sesión" onClick={ onLogout }>Cerrar sesión</a>
          </p>
      </div>
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
