import React from 'react';
import PropTypes from 'prop-types';

import { MainContainer, SecondaryContainer } from './styled';
import Title from './title.styled'
import Text from '../Text'

const ContactAndPhoneInfo = ({phoneText}) => (
	<MainContainer>
		<div>
			<Title>Comprá también por teléfono</Title>
			<div>
				<Text type="l">'''ícono tel @'''</Text>
				{phoneText}
			</div>
		</div>
		<SecondaryContainer>
			<a href="http://www.avantrip.com/centro-de-ayuda" target="_blank">
				(I)
			</a>
		</SecondaryContainer>
	</MainContainer>
)

ContactAndPhoneInfo.propTypes = {
  phoneText: PropTypes.string.isRequired
}

ContactAndPhoneInfo.defaultProps = {

}

export default ContactAndPhoneInfo;
