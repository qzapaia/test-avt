import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyledLink from '../Link/container.styled';

export const StyledUserNav = styled.div`
  text-align:right;
`

export const StyledPipe = styled.span`
  display:inline-bock;
  padding: 0 5px;
`

export const StyledLinkUserNav = StyledLink.extend`
	position: relative;
	margin: 0 7px 0 0;
	> span{
		background:#000;
		color:#fff;
		font-weight: normal;
		padding:2px;
		box-sizing: border-box;
		position:absolute;
		top: -16px;
	    right: -8px;
	}
  	:hover{
  		text-decoration: none;  	
  	}
  	:before{
  		content:'';
  		width: 20px;
  		height: 20px;
  		background: #ff6600;
  		display:inline-block;
  		&:hover{
  			background: #c11127;
  		}
  	}
 `
