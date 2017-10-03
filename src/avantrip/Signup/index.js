import React from 'react';
import PropTypes from 'prop-types';

const facebookButoonStyle = {
	color:'white',
	backgroundColor:'blue'
}

const Signup = ({onFacebookSignup}) => (
	<div>
		<div>
			¡Accedé y recibí ofertas exclusivas!
		</div>
		<div style={facebookButoonStyle} onClick={onFacebookSignup}>
			Botón de Facebook
		</div>
		<div>
			No publicaremos nada en Facebook sin tu permiso.
		</div>
	</div>
)

export default Signup;
