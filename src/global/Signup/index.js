import React from 'react';
import PropTypes from 'prop-types';

import FacebookLogin from './FacebookLogin';

const facebookHandler = next => data => {
  console.log("signup", data);
  next({
    facebook: data
  })
}

const Signup = ({onFacebookSignup}) => (
	<div>
		<div>
			¡Accedé y recibí ofertas exclusivas!
		</div>
    <FacebookLogin
      onSignup={facebookHandler(onFacebookSignup)} />
		<div>
			No publicaremos nada en Facebook sin tu permiso.
		</div>
	</div>
)


Signup.propTypes = {
  onFacebookSignup:PropTypes.func.isRequired,
}

export default Signup;
