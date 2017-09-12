import React from 'react';
import PropTypes from 'prop-types';

const ContactAndPhoneInfo = ({phoneText}) => (
	<div>
		<div>
			<div>Comprá también por teléfono</div>
			<div><span>'''ícono tel @'''</span>{phoneText}</div>
		</div>
		<a href="http://www.avantrip.com/centro-de-ayuda" target="_blank">
			ícono de ayuda (link)
		</a>
	</div>
)

ContactAndPhoneInfo.propTypes = {
  phoneText: PropTypes.string.isRequired
}

ContactAndPhoneInfo.defaultProps = {
  
}

export default ContactAndPhoneInfo;
