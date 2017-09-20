import React from 'react';
import PropTypes from 'prop-types';

const Session = ({ messageNumber, userName, points, quoteLink  }) => (
  <div>
      <div>{ userName }</div>

              <div>
                  <a href={ quoteLink }>
                      <div>
                          <div>{ messageNumber }</div>
                      </div>
                  </a>
              </div>
      <div>
          Mis puntos: <strong>{ points }!</strong>
      </div>

      <div>
          <span>{ points }</span>
      </div>

      <div>
          <p><a href="/mis-canjes" title="Mis Canjes en Viajes y Turismo">Mis Canjes en Viajes y Turismo</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a id="close-session" href="/logout" title="Cerrar sesión">Cerrar sesión</a></p>
      </div>

  </div>
)

Session.propTypes = {
  messageNumber : PropTypes.string,
  userName : PropTypes.string,
  points : PropTypes.string,
  quoteLink : PropTypes.string
}

Session.defaultProps = {
  messageNumber : "",
  userName : "",
  points : "",
  quoteLink : ""
}

export default Session;
