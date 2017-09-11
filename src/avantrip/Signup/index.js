import React from 'react';
import PropTypes from 'prop-types';

const Signup = ({onClick}) => (
	<div>
		<div>
			¡Accedé y recibí ofertas exclusivas!
		</div>
		<div onClick={onClick}>
			Botón de Facebook
		</div>
		<div>
			No publicaremos nada en Facebook sin tu permiso.
		</div>
	</div>
)

export default Signup;
