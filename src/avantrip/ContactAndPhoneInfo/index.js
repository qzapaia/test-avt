import React from 'react';
import PropTypes from 'prop-types';

import { Container, TelContainer, TelContent, HelpContainer, HelpLink } from './container.styled';
import Text from '../Text';
import Icon from '../Icon/index';

const ContactAndPhoneInfo = ({phoneText}) => (
	<Container>
		<TelContainer>
			<h2>
				<Text type='s'>
					Comprá también por teléfono
				</Text>
			</h2>
			<TelContent>
				<Icon
			    height='21px'
			    id='Phone'
			  />
				<Text type="l">{phoneText}</Text>
			</TelContent>
		</TelContainer>
		<HelpContainer>
			<HelpContainer href="http://www.avantrip.com/centro-de-ayuda" target="_blank">
				(I)
			</HelpContainer>
		</HelpContainer>
	</Container>
)

ContactAndPhoneInfo.propTypes = {
  phoneText: PropTypes.string.isRequired
}

ContactAndPhoneInfo.defaultProps = {

}

export default ContactAndPhoneInfo;
