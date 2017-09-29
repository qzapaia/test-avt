import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
	color: #ff6600;
	text-decoration: none;
	:hover{
		text-decoration: underline;
	}
	:visited {
    	text-decoration: none;
	}
`

export default StyledLink;
