import React from 'react';
import PropTypes from 'prop-types';

import { Container, TelContainer, TelContent, HelpContainer, HelpLink } from './container.styled';
import Text from '../Text';
import Icon from '../Icon/index';

const ContactAndPhoneInfo = ({phoneText}) => (
	<Container>
		<TelContainer>
			<Text tag='h2' type='m'>
				Comprá también por teléfono
			</Text>
			<TelContent>
				<Icon height='21px' id='Phone'/>
				<Text type="l">{phoneText}</Text>
			</TelContent>
		</TelContainer>
		<HelpContainer>
			<HelpLink href="http://www.avantrip.com/centro-de-ayuda" target="_blank">
				<Icon	height='30px'	id='Help'/>
			</HelpLink>
		</HelpContainer>
	</Container>
)

ContactAndPhoneInfo.propTypes = {
  phoneText: PropTypes.string.isRequired
}

ContactAndPhoneInfo.defaultProps = {

}

export default ContactAndPhoneInfo;
