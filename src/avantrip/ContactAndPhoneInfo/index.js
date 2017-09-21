import React from 'react';
import PropTypes from 'prop-types';

import { MainContainer, SecondaryContainer } from './styled';
import Title from './title.styled'
import Text from '../Text'
import Link from '../Link'

const ContactAndPhoneInfo = ({phoneText}) => (
	<MainContainer>
		<div>
			<Title>Comprá también por teléfono</Title>
			<div>
				<Text type="l">'''ícono tel @'''</Text>
				{phoneText}
			</div>
		</div>
		<Link href="http://www.avantrip.com/centro-de-ayuda" target="_blank">
			ícono de ayuda (link)
		</Link>
	</MainContainer>
)

ContactAndPhoneInfo.propTypes = {
  phoneText: PropTypes.string.isRequired
}

ContactAndPhoneInfo.defaultProps = {

}

export default ContactAndPhoneInfo;
