import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';

const ContactAndPhoneInfo = ({phoneText}) => (
	<div>
		<div>
			<div>Comprá también por teléfono</div>
			<div><span>'''ícono tel @'''</span>{phoneText}</div>
		</div>
		<Link href="http://www.avantrip.com/centro-de-ayuda" target="_blank">
			ícono de ayuda (link)
		</Link>
	</div>
)

ContactAndPhoneInfo.propTypes = {
  phoneText: PropTypes.string.isRequired
}

ContactAndPhoneInfo.defaultProps = {

}

export default ContactAndPhoneInfo;
