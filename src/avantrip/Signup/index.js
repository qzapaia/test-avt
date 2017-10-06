import React from 'react';
import PropTypes from 'prop-types';
import {Container, SignUpContainer, ExclusiveOffers, Disclaimer} from './styled';

import FacebookLogin from './FacebookLogin';

const facebookHandler = next => data => {
  next({
    facebook: data
  })
}

const Signup = ({onFacebookSignup}) => (
	<Container id='signup'>
    <SignUpContainer>
      <ExclusiveOffers>
        ¡Accedé y recibí ofertas exclusivas!
      </ExclusiveOffers>
      <FacebookLogin
        onSignup={facebookHandler(onFacebookSignup)} />
        <Disclaimer type='xs' color='darkergray'>
          No publicaremos nada en Facebook sin tu permiso.
        </Disclaimer>
    </SignUpContainer>
	</Container>
)


Signup.propTypes = {
  onFacebookSignup:PropTypes.func.isRequired,
}

export default Signup;
