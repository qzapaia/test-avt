import React from 'react';
import PropTypes from 'prop-types';

import { Container, TelContainer, TelContent, HelpContainer, HelpLink, TelNumber, TelTitle } from './styled';
import Text from '../Text';
import Icon from '../Icon/index';

const ContactAndPhoneInfo = ({phoneText}) => (
	<Container>
		<TelContainer>
			<TelTitle color='darkergray' tag='h2' type='s'>
				Comprá también por teléfono
			</TelTitle>
			<TelContent>
				<Icon width='21px' height='21px' id='Phone' color='brand'/>
				<TelNumber type="l">{phoneText}</TelNumber>
			</TelContent>
		</TelContainer>
		<HelpContainer>
			<HelpLink href="http://www.avantrip.com/centro-de-ayuda" target="_blank">
				<Icon width='26px'	height='26px'	id='Help' color='primary'/>
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
